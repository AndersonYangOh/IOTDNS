package com.chinaunicom.testweb.controller;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chinaunicom.testweb.pojo.AICheckReport;
import com.chinaunicom.testweb.pojo.AICheckStat;
import com.chinaunicom.testweb.pojo.Message;
import com.chinaunicom.testweb.service.AIMVService;

@Controller
@RequestMapping("aimv")
public class AIMVController {

	@Autowired
	private AIMVService aimvService;
	
	@RequestMapping("/getDefectReport")
	@ResponseBody
	public Message getDefectReport(HttpServletRequest request) {
		Message message = new Message();
		try {
			List<AICheckReport> list = aimvService.getDefectReport();
			for(AICheckReport obj: list) {
				String time = obj.getCheckTime();
				obj.setCheckTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new SimpleDateFormat("yyyyMMddHHmmss").parse(time)));
				obj.setPicDir("http://10.1.24.153/"+obj.getPicDir());
			}
			message.setFlag(true);
			message.setMsg("success");
			message.setResult(list);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			message.setFlag(false);
			message.setMsg("出錯啦！");
		}
		return message;
	}
	
	@RequestMapping("/getCheckStats")
	@ResponseBody
	public Message getCheckStats(HttpServletRequest request) {
		Message message = new Message();
		Map<String, AICheckStat> resultMap = new HashMap<>();
		try {
			List<AICheckStat> list = aimvService.getCheckStats();
			for(AICheckStat stat: list) {
				resultMap.put(stat.getCheckResult(), stat);
			}
			message.setFlag(true);
			message.setMsg("success");
			message.setResult(resultMap);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			message.setFlag(false);
			message.setMsg("出錯啦！");
		}
		return message;
	}
	
	@RequestMapping("/getCheckStatByCode")
	@ResponseBody
	public Message getCheckStatByCode(HttpServletRequest request) {
		Message message = new Message();
		try {
			String checkCode = request.getParameter("checkCode");
			AICheckStat stat = aimvService.getCheckStatByCode(checkCode);
			message.setFlag(true);
			message.setMsg("success");
			message.setResult(stat);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			message.setFlag(false);
			message.setMsg("出錯啦！");
		}
		return message;
	}
	
}
