package com.sdg.cmdb.domain.server;

import java.io.Serializable;

/**
 * Created by liangjian on 2017/4/21.
 */
public class CreateEcsVO implements Serializable {

    private static final long serialVersionUID = 5054980679991184075L;

    private EcsTemplateDO ecsTemplateDO;

    private long ecsTemplateId;

    private ServerVO serverVO;

    /**
     * 数据盘容量
     */
    private int dataDiskSize;

    /**
     * 需要创建的服务器数量
     */
    private int cnt;

    /**
     * 0 默认
     * 1 自定义
     */
    private int networkConfig;

    /**
     * 是否分配公网ip
     * 1 是
     * 0 否
     */
    private int allocatePublicIpAddress;

    public int getNetworkConfig() {
        return networkConfig;
    }

    public void setNetworkConfig(int networkConfig) {
        this.networkConfig = networkConfig;
    }

    private long imageId;

    private String networkType;

    private long vpcId;

    private long vswitchId;

    private long securityGroupId;

    public long getImageId() {
        return imageId;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    public String getNetworkType() {
        return networkType;
    }

    public void setNetworkType(String networkType) {
        this.networkType = networkType;
    }

    public long getVpcId() {
        return vpcId;
    }

    public ServerVO getServerVO() {
        return serverVO;
    }

    public void setServerVO(ServerVO serverVO) {
        this.serverVO = serverVO;
    }

    public void setVpcId(long vpcId) {
        this.vpcId = vpcId;
    }

    public long getVswitchId() {
        return vswitchId;
    }

    public void setVswitchId(long vswitchId) {
        this.vswitchId = vswitchId;
    }

    public long getSecurityGroupId() {
        return securityGroupId;
    }

    public void setSecurityGroupId(long securityGroupId) {
        this.securityGroupId = securityGroupId;
    }

    public long getEcsTemplateId() {
        return ecsTemplateId;
    }

    public void setEcsTemplateId(long ecsTemplateId) {
        this.ecsTemplateId = ecsTemplateId;
    }

    public int getDataDiskSize() {
        return dataDiskSize;
    }

    public void setDataDiskSize(int dataDiskSize) {
        this.dataDiskSize = dataDiskSize;
    }

    public int getCnt() {
        return cnt;
    }

    public void setCnt(int cnt) {
        this.cnt = cnt;
    }

    public EcsTemplateDO getEcsTemplateDO() {
        return ecsTemplateDO;
    }

    public void setEcsTemplateDO(EcsTemplateDO ecsTemplateDO) {
        this.ecsTemplateDO = ecsTemplateDO;
    }

    public int getAllocatePublicIpAddress() {
        return allocatePublicIpAddress;
    }

    public void setAllocatePublicIpAddress(int allocatePublicIpAddress) {
        this.allocatePublicIpAddress = allocatePublicIpAddress;
    }

    @Override
    public String toString() {
        return "CreateEcsVO{" +
                "ServerVO=" + serverVO +
                ", allocatePublicIpAddress=" + allocatePublicIpAddress +
                ", ecsTemplateId=" + ecsTemplateId +
                ", dataDiskSize=" + dataDiskSize +
                ", cnt=" + cnt +
                ", networkConfig=" + networkConfig +
                ", imageId=" + imageId +
                ", networkType='" + networkType + '\'' +
                ", vpcId=" + vpcId +
                ", vswitchId=" + vswitchId +
                ", securityGroupId=" + securityGroupId +
                '}';
    }


}
