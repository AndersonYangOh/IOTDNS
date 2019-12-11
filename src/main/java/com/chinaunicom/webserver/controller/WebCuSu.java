package com.chinaunicom.testweb.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
 
import com.chinaunicom.testweb.pojo.Customer;
import com.chinaunicom.testweb.pojo.Device;
import com.chinaunicom.testweb.pojo.Industry;
import com.chinaunicom.testweb.pojo.Message;
import com.chinaunicom.testweb.pojo.Province;
import com.chinaunicom.testweb.pojo.SearchResult;
import com.chinaunicom.testweb.service.ICustomService; 
import com.google.gson.Gson;

@Controller
@RequestMapping(value = "/search")
public class CustomController {
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	

	@Autowired
	public ICustomService customService;

	@RequestMapping(value = "index")
	public String index(@RequestParam("name") String name, Model model) {
		model.addAttribute("name", name);
		logger.info("index:{}", name);
		return "index";
	}
 
	
	@RequestMapping(value = "search4")
	public @ResponseBody String search(@RequestBody String json) {
		String response = "{}";
		try {
			logger.info("request:{}", json);
			Gson gs = new Gson();
			Map<String, String> info = gs.fromJson(json, Map.class);
			String chooseString = info.get("chooseString");
			if(chooseString.equals("1")){
				List<Industry> result = customService.searchIndustry(info.get("valueString"));
				response = gs.toJson(result);
			}
			if(chooseString.equals("2")){
				List<Customer> result = customService.searchCustomer(info.get("valueString"));
				response = gs.toJson(result);
			}
			if(chooseString.equals("3")){
				List<Province> result = customService.searchProvince(info.get("valueString"));
				response = gs.toJson(result);
			}
			if(chooseString.equals("4")){
				Device d = new Device();
				d.setImei(info.get("valueString"));
				Device result = customService.searchDeviceByIMEI(d);
				response = gs.toJson(result);
			}
			
			logger.info("response:{}", response);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("异常:", e);
		}
		return response;
	}
	
	
	@RequestMapping(value = "keywordName")
	public @ResponseBody Map<String, Object> keywordName(HttpServletRequest request,  String keyword) {
		logger.info("开始执行企业名称检索，检索关键字：{},类型：{}" ,keyword );
		Map<String, Object> map = new HashMap<String, Object>();
		Message msg = new Message();
		msg.setMsg(keyword);
		List<SearchResult> lst = new ArrayList<SearchResult>(); //响应结果集
		List<Customer> result = null; //查询结果集
		
		try {
			result = customService.searchKeywordName(msg);
			msg.setMsg("检索成功");
		} catch (Exception e) {
			logger.error("根据关键字检索企业名称列表异常:{}", e);
			msg.setFlag(false);
			msg.setMsg("根据关键字检索企业名称列表异常：" + e.getMessage());
		}
		
		if (result != null) {
			for (Customer r : result) {
				SearchResult rst = new SearchResult();
				rst.setId(r.getCustomer());
				rst.setName(r.getCustomer());
				lst.add(rst);
			}
		}
		
		map.put("items", lst);
		map.put("msg", msg);
		
		logger.info("结束执行企业名称检索，检索结果记录数：" + lst.size());
		return map;
	}
	
	@RequestMapping(value = "keywordImei")
	public @ResponseBody Map<String, Object> keywordImei(HttpServletRequest request,  String keyword) {
		logger.info("开始执行Imei检索，检索关键字：{},类型：{}" ,keyword );
		Map<String, Object> map = new HashMap<String, Object>();
		Message msg = new Message();
		msg.setMsg(keyword);
		List<SearchResult> lst = new ArrayList<SearchResult>(); //响应结果集
		List<Device> result = null; //查询结果集
		
		try {
			result = customService.searchKeywordImei(msg);
			msg.setMsg("检索成功");
		} catch (Exception e) {
			logger.error("根据关键字检索Imei列表异常:{}", e);
			msg.setFlag(false);
			msg.setMsg("根据关键字检索Imei列表异常：" + e.getMessage());
		}
		
		if (result != null) {
			for (Device r : result) {
				SearchResult rst = new SearchResult();
				rst.setId(r.getImei());
				rst.setName(r.getImei());
				lst.add(rst);
			}
		}
		
		map.put("items", lst);
		map.put("msg", msg);
		
		logger.info("结束执行Imei检索，检索结果记录数：" + lst.size());
		return map;
	}

}
