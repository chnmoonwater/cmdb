package com.sdg.cmdb.service.control.configurationfile;

import com.sdg.cmdb.domain.server.ServerDO;
import com.sdg.cmdb.domain.server.ServerGroupDO;
import com.sdg.cmdb.service.impl.ConfigServerGroupServiceImpl;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by liangjian on 2017/6/6.
 */
@Service
public class NginxLocationKaService extends ConfigurationFileControlAbs {


    @Override
    public String acqConfig() {
        return "";
    }

    public  String acqDomain(){
        return "ka.52shangou.com";
    }

    /**
     * 按类型build
     * 0: daily
     *
     * @param type
     */
    @Override
    public String acqConfig(int type) {
        int envCode = type;
        return buildLocation(envCode);
    }

    @Override
    protected boolean isBuildLocation(ServerGroupDO serverGroupDO){
        return configServerGroupService.isBuildKaLocation(serverGroupDO);
    }




}
