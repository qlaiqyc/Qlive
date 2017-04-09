PageInfo.register({"type":"Obj","info":function(){
	
	var FunUtil = {};
    var HtmUtil = {};
	
	
	HtmUtil.layout   = function(){
		
		return '<div id="common-detail">detail</div>';
		
	};
	
	FunUtil.Global = {
		"child":{
			"id":123
		}
	};//传参对象
	
	
	var page = {
			    data(){
			        var param = {};
			        
			        param.HtmUtil = HtmUtil;
			        param.FunUtil = FunUtil;
			        
			        
			        return param;
			    },
			    init(){
			        console.log("==detail==init")
			    },
			    update(){
			        
			    },
			    show(){
			         console.log("==detail==show")
			    },
			    hide(){
			    	 console.log("==detail==hide")
			    },   
			    destory(){
			        
			    }
			
			};
	
	return page;
}});

