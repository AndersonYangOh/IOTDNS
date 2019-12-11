package com.chinaunicom.testweb.service.impl;

import java.util.List; 

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chinaunicom.testweb.dao.CustomDao;
import com.chinaunicom.testweb.pojo.Customer;
import com.chinaunicom.testweb.pojo.Device;
import com.chinaunicom.testweb.pojo.Industry;
import com.chinaunicom.testweb.pojo.Message;
import com.chinaunicom.testweb.pojo.Province;
import com.chinaunicom.testweb.service.ICustomService; 

@Service
public class CustomServiceImpl implements ICustomService {
	@Resource(name="customDao")
	public CustomDao customDao;
	
	@Override
	public List<Industry> searchIndustry(String industry) {
		
		return customDao.searchIndustry(industry);
	}
	@Override
	public List<Customer> searchCustomer(String customer) {
		
		return customDao.searchCustomer(customer);
	}
	@Override
	public List<Province> searchProvince(String province){
		
		return customDao.searchProvince(province);
	}
	@Override
	public List<Device> searchCount(Device device){
		
		return customDao.searchCount(device);
	}
	@Override
	public List<Device> searchDevice(Device device){
		
		return customDao.searchDevice(device);
	}
	@Override
	public List<Device> searchAccountId(Device device){
		
		return customDao.searchAccountId(device);
	}
	@Override
	public List<Customer> searchKeywordName(Message keyword){
		
		return customDao.searchKeywordName(keyword);
	}
	@Override
	public List<Device> searchKeywordImei(Message keyword){
		
		return customDao.searchKeywordImei(keyword);
	}
	@Override
	public Device searchDeviceByIMEI(Device device){
		String imei = device.getImei();
		String tac = imei.substring(0,8);
		device.setTac(tac);
		
		String accountid = customDao.searchAccountId(device).get(0).getAccountid();
		device.setAccountid(accountid);
		List<Device> ds = customDao.searchDevice(device);
		Device d = new Device();
		d.setImei(imei);
		if(ds!=null||ds.size()>0){
			d = customDao.searchDevice(device).get(0);
			d.setImei(imei);
			int count = customDao.searchCount(device).get(0).getActualConnect();
			d.setActualConnect(count); 
		}
		return d;
		
	}

}
