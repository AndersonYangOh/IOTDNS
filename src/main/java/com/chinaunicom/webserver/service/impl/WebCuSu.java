package com.chinaunicom.testweb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chinaunicom.testweb.dao.AIMVDao;
import com.chinaunicom.testweb.pojo.AICheckReport;
import com.chinaunicom.testweb.pojo.AICheckStat;
import com.chinaunicom.testweb.service.AIMVService;

@Service
public class AIMVServiceImpl implements AIMVService{

	@Autowired
	private AIMVDao aimvDao;
	
	@Override
	public List<AICheckReport> getDefectReport() {
		// TODO Auto-generated method stub
		return aimvDao.getDefectReport();
	}

	@Override
	public List<AICheckStat> getCheckStats() {
		// TODO Auto-generated method stub
		return aimvDao.getCheckStats();
	}

	@Override
	public AICheckStat getCheckStatByCode(String checkCode) {
		// TODO Auto-generated method stub
		return aimvDao.getCheckStatByCode(checkCode);
	}
	
	
}
