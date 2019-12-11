package com.chinaunicom.testweb.dao;

import java.util.List;

import com.chinaunicom.testweb.pojo.AICheckReport;
import com.chinaunicom.testweb.pojo.AICheckStat;

public interface AIMVDao {
	
	public List<AICheckReport> getDefectReport();
	public List<AICheckStat> getCheckStats();
	public AICheckStat getCheckStatByCode(String checkCode);
	
}
