	/*各区域产品挂牌数-开始*/
	//牧草产能区域分布数据
	var DataCenter = [{
		name: "北海数据中心",
		num: "110569"
	}, {
		name: "上海数据中心",
		num: "110569"
	}, {
		name: "北京数据中心",
		num: "110569"
	}, {
		name: "深圳数据中心",
		num: "110569"
	}];

	/*各区域产品挂牌数-结束*/
	//牧草
	var ChanNeng = [{
		name: "西南地区种植面积",
		num: 891433
	}, {
		name: "华南地区种植面积",
		num: 189472
	}, {
		name: "北方地区种植面积",
		num: 63803
	}];
	//入驻会员实时动态滚动数据
	var RZstatus = ["绿邦创景成功挂牌入驻南方草交所", "晨光金品百花园成功挂牌入驻南方草交所", "绿邦创景成功挂牌入驻南方草交所", "晨光金品百花园成功挂牌入", "绿邦创景成功挂牌入驻南方草交所", "晨光金品百花园成功挂牌入驻南方草交所", "绿邦创景成功挂牌入驻南方草交所", "晨光金品百花园成功挂牌入", "绿邦创景成功挂牌入驻南方草交所", "晨光金品百花园成功挂牌入驻南方草交所", "绿邦创景成功挂牌入驻南方草交所", "晨光金品百花园成功挂牌入"];
	var callMsg = ["绿邦创景卖出500000万元人民币", "更多模板，关注公众号【DreamCoders】回复'BigDataView'即可获取或前往Gitee下载 https://gitee.com/iGaoWei/big-data-view", "猪猪侠买入500000万元人民币"];
	var CJstatus = [
		[{
			num: "ASDA5484561515",
			name: "重工业",
			cont: "10",
			weight: "1223 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "重工业",
			cont: "102",
			weight: "78 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "重工业",
			cont: "85",
			weight: "105  ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "重工业",
			cont: "71",
			weight: "120 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "重工业",
			cont: "78",
			weight: "42",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "重工业",
			cont: "96",
			weight: "41",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "重工业",
			cont: "25",
			weight: "63",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "重工业",
			cont: "45",
			weight: "765 ",
			time: "2018-06-11",
			state: "工作中"
		}],
		[{
			num: "ASDA5484561515",
			name: "农业",
			cont: "55",
			weight: "123",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "农业",
			cont: "88",
			weight: "22 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "农业",
			cont: "66",
			weight: "55",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "农业",
			cont: "52",
			weight: "31 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "农业",
			cont: "85",
			weight: "85",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "农业",
			cont: "85",
			weight: "12",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "农业",
			cont: "78",
			weight: "99 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "农业",
			cont: "87",
			weight: "78",
			time: "2018-06-11",
			state: "工作中"
		}],
		[{
			num: "ASDA5484561515",
			name: "轻工业",
			cont: "99",
			weight: "65",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "轻工业",
			cont: "108",
			weight: "10 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "轻工业",
			cont: "7",
			weight: "45 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "轻工业",
			cont: "18",
			weight: "8 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "轻工业",
			cont: "48",
			weight: "52",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "轻工业",
			cont: "69",
			weight: "74",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "轻工业",
			cont: "85",
			weight: "15",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "轻工业",
			cont: "15",
			weight: "14",
			time: "2018-06-11",
			state: "工作中"
		}],
		[{
			num: "ASDA5484561515",
			name: "纺织业",
			cont: "78",
			weight: "63 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "纺织业",
			cont: "103",
			weight: "86 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "纺织业",
			cont: "78",
			weight: "431",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "纺织业",
			cont: "97",
			weight: "62 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "纺织业",
			cont: "89",
			weight: "71 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "纺织业",
			cont: "89",
			weight: "133 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "纺织业",
			cont: "45",
			weight: "100 ",
			time: "2018-06-11",
			state: "工作中"
		}, {
			num: "ASDA5484561515",
			name: "纺织业",
			cont: "852",
			weight: "833 ",
			time: "2018-06-11",
			state: "工作中"
		}],
	];