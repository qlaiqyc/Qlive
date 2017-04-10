PageInfo.register({"type":"Obj","info":function(){
	
	var FunUtil = {};
    var HtmUtil = {};
	
	
	HtmUtil.layout   = function(){
		
		return '<div id="common-article">article</div>';
	};
	
	FunUtil.Global = {
		"child":{
			"id":123
		}
	};;//传参对象
	
	
	var page = {
			    data(){
			        var param = {};
			        
			        param.HtmUtil = HtmUtil;
			        param.FunUtil = FunUtil;
			        
			        
			        return param;
			    },
			    init(){
			        console.log("==article==init")
			    },
			    update(){
			        
			    },
			    show(){
			         console.log("==article==show")
			         console.log(this.data());
			    },
			    hide(){
			    	 console.log("==article==hide")
			    },   
			    destory(){
			        
			    }
			
			};
	
	return page;
}});

