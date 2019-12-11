package com.chinaunicom.testweb.dao;

import java.util.List;

import com.chinaunicom.testweb.pojo.Customer;
import com.chinaunicom.testweb.pojo.Device;
import com.chinaunicom.testweb.pojo.Industry;
import com.chinaunicom.testweb.pojo.Message;
import com.chinaunicom.testweb.pojo.Province; 

public interface CustomDao {
	public List<Industry> searchIndustry(String industry);
	public List<Customer> searchCustomer(String customer);
	public List<Province> searchProvince(String province);
	public List<Device> searchCount(Device device);
	public List<Device> searchDevice(Device device);
	public List<Device> searchAccountId(Device device);
	public List<Customer> searchKeywordName(Message keyword);
	public List<Device> searchKeywordImei(Message keyword);
}
