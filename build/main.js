//to do: remove all obs with missing values from the data

import dir from "../../js-modules/rackspace.js";
import dimensions from "../../js-modules/dimensions.js";
import format from "../../js-modules/formats.js";

var fp = dir.local().url("/data/emp_status.json");

function main(){
	var geos = [{"fips":"6001c","name":"Alameda County (part)"},{"fips":"35001a","name":"Albuquerque city, New Mexico"},{"fips":"42003c","name":"Allegheny County (part)"},{"fips":"24003c","name":"Anne Arundel County (part)"},{"fips":"24510a","name":"Baltimore city, Maryland"},{"fips":"24005c","name":"Baltimore County (part)"},{"fips":"34003c","name":"Bergen County (part)"},{"fips":"48029c","name":"Bexar County (part)"},{"fips":"25025a","name":"Boston city, Massachusetts"},{"fips":"12009c","name":"Brevard County (part)"},{"fips":"25005c","name":"Bristol County (part)"},{"fips":"12011c","name":"Broward County (part)"},{"fips":"42017c","name":"Bucks County (part)"},{"fips":"34007c","name":"Camden County (part)"},{"fips":"17031a","name":"Chicago city, Illinois"},{"fips":"13067c","name":"Cobb County (part)"},{"fips":"48085c","name":"Collin County (part)"},{"fips":"6013c","name":"Contra Costa County (part)"},{"fips":"39035c","name":"Cuyahoga County (part)"},{"fips":"48113c","name":"Dallas County (part)"},{"fips":"13089c","name":"DeKalb County (part)"},{"fips":"42045c","name":"Delaware County (part)"},{"fips":"48121c","name":"Denton County (part)"},{"fips":"8031a","name":"Denver city, Colorado"},{"fips":"26163a","name":"Detroit city, Michigan"},{"fips":"31055c","name":"Douglas County (part)"},{"fips":"17043c","name":"DuPage County (part)"},{"fips":"48141a","name":"El Paso city, Texas"},{"fips":"8041c","name":"El Paso County (part)"},{"fips":"36029c","name":"Erie County (part)"},{"fips":"25009c","name":"Essex County (part)"},{"fips":"34013c","name":"Essex County (part)"},{"fips":"51059c","name":"Fairfax County (part)"},{"fips":"9001c","name":"Fairfield County (part)"},{"fips":"48157c","name":"Fort Bend County (part)"},{"fips":"39049c","name":"Franklin County (part)"},{"fips":"6019c","name":"Fresno County (part)"},{"fips":"13121c","name":"Fulton County (part)"},{"fips":"13135c","name":"Gwinnett County (part)"},{"fips":"39061c","name":"Hamilton County (part)"},{"fips":"48201c","name":"Harris County (part)"},{"fips":"9003c","name":"Hartford County (part)"},{"fips":"27053c","name":"Hennepin County (part)"},{"fips":"48215c","name":"Hidalgo County (part)"},{"fips":"12057c","name":"Hillsborough County (part)"},{"fips":"15003c","name":"Honolulu County (part)"},{"fips":"34017c","name":"Hudson County (part)"},{"fips":"18097a","name":"Indianapolis city (balance), Indiana"},{"fips":"29095c","name":"Jackson County (part)"},{"fips":"12031a","name":"Jacksonville city, Florida"},{"fips":"1073c","name":"Jefferson County (part)"},{"fips":"20091c","name":"Johnson County (part)"},{"fips":"17089c","name":"Kane County (part)"},{"fips":"26081c","name":"Kent County (part)"},{"fips":"6029c","name":"Kern County (part)"},{"fips":"17097c","name":"Lake County (part)"},{"fips":"42071c","name":"Lancaster County (part)"},{"fips":"32003a","name":"Las Vegas city, Nevada"},{"fips":"12071c","name":"Lee County (part)"},{"fips":"6037a","name":"Los Angeles city, California"},{"fips":"21111a","name":"Louisville/Jefferson County metro government (balance), Kentucky"},{"fips":"26099c","name":"Macomb County (part)"},{"fips":"37119c","name":"Mecklenburg County (part)"},{"fips":"12086c","name":"Miami-Dade County (part)"},{"fips":"34023c","name":"Middlesex County (part)"},{"fips":"55079a","name":"Milwaukee city, Wisconsin"},{"fips":"34025c","name":"Monmouth County (part)"},{"fips":"36055c","name":"Monroe County (part)"},{"fips":"24031c","name":"Montgomery County (part)"},{"fips":"39113c","name":"Montgomery County (part)"},{"fips":"42091c","name":"Montgomery County (part)"},{"fips":"47037a","name":"Nashville-Davidson metropolitan government (balance), Tennessee"},{"fips":"36059c","name":"Nassau County (part)"},{"fips":"10003c","name":"New Castle County (part)"},{"fips":"9009c","name":"New Haven County (part)"},{"fips":"36005a","name":"New York city, New York"},{"fips":"36047a","name":"New York city, New York"},{"fips":"36061a","name":"New York city, New York"},{"fips":"36081a","name":"New York city, New York"},{"fips":"26125c","name":"Oakland County (part)"},{"fips":"34029c","name":"Ocean County (part)"},{"fips":"40109c","name":"Oklahoma County (part)"},{"fips":"12095c","name":"Orange County (part)"},{"fips":"6059c","name":"Orange County (part)"},{"fips":"12099c","name":"Palm Beach County (part)"},{"fips":"34031c","name":"Passaic County (part)"},{"fips":"42101a","name":"Philadelphia city, Pennsylvania"},{"fips":"4013a","name":"Phoenix city, Arizona"},{"fips":"53053c","name":"Pierce County (part)"},{"fips":"4019c","name":"Pima County (part)"},{"fips":"12103c","name":"Pinellas County (part)"},{"fips":"12105c","name":"Polk County (part)"},{"fips":"41051a","name":"Portland city, Oregon"},{"fips":"24033c","name":"Prince George's County (part)"},{"fips":"44007c","name":"Providence County (part)"},{"fips":"27123c","name":"Ramsey County (part)"},{"fips":"32003b","name":"Remainder - Clark County (part)"},{"fips":"17031b","name":"Remainder - Cook County (part)"},{"fips":"53033b","name":"Remainder - King County (part)"},{"fips":"6037b","name":"Remainder - Los Angeles County (part)"},{"fips":"4013b","name":"Remainder - Maricopa County (part)"},{"fips":"26163b","name":"Remainder - Wayne County (part)"},{"fips":"6065c","name":"Riverside County (part)"},{"fips":"6067c","name":"Sacramento County (part)"},{"fips":"49035c","name":"Salt Lake County (part)"},{"fips":"6071c","name":"San Bernardino County (part)"},{"fips":"6073c","name":"San Diego County (part)"},{"fips":"6075a","name":"San Francisco city, California"},{"fips":"6077c","name":"San Joaquin County (part)"},{"fips":"6081c","name":"San Mateo County (part)"},{"fips":"6085c","name":"Santa Clara County (part)"},{"fips":"53033a","name":"Seattle city, Washington"},{"fips":"47157c","name":"Shelby County (part)"},{"fips":"53061c","name":"Snohomish County (part)"},{"fips":"6099c","name":"Stanislaus County (part)"},{"fips":"29189c","name":"St. Louis County (part)"},{"fips":"36103c","name":"Suffolk County (part)"},{"fips":"39153c","name":"Summit County (part)"},{"fips":"48439c","name":"Tarrant County (part)"},{"fips":"48453c","name":"Travis County (part)"},{"fips":"40143c","name":"Tulsa County (part)"},{"fips":"34039c","name":"Union County (part)"},{"fips":"49049c","name":"Utah County (part)"},{"fips":"6111c","name":"Ventura County (part)"},{"fips":"37183c","name":"Wake County (part)"},{"fips":"11001a","name":"Washington city, District of Columbia"},{"fips":"41067c","name":"Washington County (part)"},{"fips":"36119c","name":"Westchester County (part)"},{"fips":"17197c","name":"Will County (part)"},{"fips":"25027c","name":"Worcester County (part)"}];
	var geo_lookup = {};
	(function(){
		var i=-1;
		while(++i < geos.length){
			geo_lookup[geos[i].fips] = geos[i].name;
		}
	})();

	//keep track of dom
	var dom = {};
	dom.wrap = d3.select("#employment-status-wrap")
		.style("width","100%")
		.style("max-width","1600px")
		.style("margin","0px auto")
		.style("min-height","500px")
		.classed("m-i makesans",true)
		;

	dom.menu = dom.wrap.append("div").classed("c-fix margin-15",true);
	
	dom.selectWrap = dom.menu.append("div");
	dom.select = dom.selectWrap.append("select");
	var options = dom.select.selectAll("option")
							.data([{fips:"99999", name:"Select a geography"}].concat(geos))
							.enter()
							.append("option")
							.attr("value",function(d,i){return d.fips})
							.text(function(d,i){return d.name})
							;

	options.filter(function(d,i){return i==0}).attr("disabled",true).attr("selected",true);

	dom.legendWrap = dom.menu.append("div");
	dom.legendWrap.append("p").text("To do: Add a legend (gray triangle is the mean for each race/ethnicity grouping). Add vertical grid lines?");

	dom.svg = dom.wrap.append("svg").style("height","100%").style("width","100%");

	dom.plotgroup = {};
	dom.plotgroup.height = 41; //height of a single line of dots
	dom.plotgroup.pad = 60;

	//variables
	var vars = [{code:"Employed", label:"Employed"}, {code:"Unemployed", label:"Unemployed"}, {code:"NILF", label:"Not in the labor force"}]

	d3.json(fp, function(error, data){

		var groups = ["White","Black","Latino","Asian","American Indian","All other"];
		var cols = ['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33']; //credit: colorbrewer2.org
		var cols = ["#e86e25", "#a91317", "#5ca86b", "#4d76b1", "#adc32b", "#88bbca"];

		var order = {};
		(function(){
			var i=-1;
			while(++i < groups.length){
				order[groups[i]] = i;
			}
		})();


		var rollup = d3.nest().key(function(d){
							return d.race;
						})
						;
						/*.sortKeys(function(a,b){
							var aval = order[a];
							var bval = order[b];
							var compare;
							try{
								compare = aval-bval;
								if(!compare){
									throw "nocompare";
								}
							}
							catch(e){
								compare = 0;
							}
							finally{
								return compare;
							};
						});*/

		var extent = [-1,1];

		//need to rollup the data
		var mapped = vars.map(function(d,i,a){
			var obs = data.obs[d.code];
			var avg = data.avg[d.code];
			var max = d3.max(obs, function(d){return d.z});
			var min = d3.min(obs, function(d,i){return d.z});
			if(min < extent[0]){extent[0] = min}
			if(max > extent[1]){extent[1] = max}
			return {var:d, obs:rollup.entries(obs), avg:rollup.entries(avg)};
		});

		var groupHeight = (groups.length*dom.plotgroup.height) + (dom.plotgroup.pad*2);
			dom.svg.style("height",((groupHeight*3)+60)+"px");
		var groupScale = d3.scaleBand().domain(groups).range([0,groupHeight]).round(true).paddingOuter(1).paddingInner(0.5);
		var valScale = d3.scaleLinear().domain(extent).range([20,95]);

		var bottom_layer = dom.svg.append("g");
		var plot_layer = dom.svg.append("g");
		var top_layer = dom.svg.append("g");


		//variable groupings: emp, unemp, nilf
		var groups_update = plot_layer.selectAll("g").data(mapped);
			groups_update.exit().remove();
		var groups_enter = groups_update.enter().append("g");
			groups_enter.append("g").classed("axis_layer",true);
			groups_enter.append("g").classed("place_layer",true);
			groups_enter.append("g").classed("avg_layer",true).attr("transform","translate(-5,0)");
			groups_enter.append("g").classed("label_layer",true).append("rect");
			groups_enter.append("g").classed("anno_layer",true).attr("transform","translate(-105,0)");

		var groups = groups_enter.merge(groups_update)
			.attr("transform",function(d,i){
				return "translate(0," + ((i*(groupHeight+15))+40) + ")"
			});

		//horizontal axes
		var xaxes = groups.select("g.axis_layer").selectAll("line").data(function(d,i){
			return d.obs;
		});
		xaxes.exit().remove();
		xaxes.enter().append("line").merge(xaxes)
		.attr("x1", "15%")
		.attr("x2", "85%")
		.attr("y1", function(d){return groupScale(d.key)+10})
		.attr("y2", function(d){return groupScale(d.key)+10})
		.attr("stroke","#aaaaaa")
		.attr("stroke-width","1")
		.attr("stroke-dasharray","2,3")
		.style("shape-rendering","crispEdges")
		;


		//labels
		var label_layers = groups.select("g.label_layer");
		//line labels
		var labels = label_layers.selectAll("text.group-label").data(function(d,i){
			return d.obs;
		});
		labels.exit().remove();
		labels.enter().append("text").classed("group-label",true).merge(labels)
		.attr("x", valScale(0)+"%")
		.attr("y", function(d){return groupScale(d.key)})
		.attr("text-anchor","middle")
		.text(function(d){return d.key.toUpperCase()})
		.style("font-size","11px")
		.attr("fill", function(d,i){
				return d3.color(cols[order[d.key]]).darker(3);
		})
		;

		//variable labels
		var vlabels_u = label_layers.selectAll("text.var-label").data(function(d,i){
			return [d.var];
		});
		vlabels_u.exit().remove();
		var vlabels_e = vlabels_u.enter().append("text").classed("var-label",true);
			vlabels_e.append("tspan").classed("var-label-span",true);
			vlabels_e.append("tspan").classed("var-label-place",true).style("font-size","0.8em");

		var vlabels = vlabels_e.merge(vlabels_u)
					.attr("x", valScale(0)+"%")
					.attr("y", "6")
					.attr("text-anchor","middle")
					.style("font-size","1em")
					;


			vlabels.select("tspan.var-label-span")
					.text(function(d){return d.label})
					.style("font-weight","bold")
					//.attr("fill","#ffffff")
					;

		//boxes around variable labels
		var labelBorders = label_layers.select("rect").attr("x", "15%")
													  .attr("transform","translate(0,0)")
													  .attr("y","-13")
													  .attr("height","25")
													  .attr("width","70%")
													  .attr("fill","#dddddd")
													  .attr("stroke","none")
													  .style("shape-rendering","crispEdges")
													  ;

		var places = groups.select("g.place_layer")
			.selectAll("g")
			.data(function(d,i){
				return d.obs;
			});

			places.exit().remove();
		var dots = places.enter()
						.append("g")
						.merge(places)
						.attr("transform",function(d,i){return "translate(0," + groupScale(d.key) + ")"})
						.selectAll("rect").data(function(d,i){return d.values});
		dots.exit().remove();
		var D = dots.enter().append("rect").merge(dots)
			//.attr("r",3)
			.attr("x",valScale(0)+"%")
			.attr("width","3px")
			.attr("height","12px")
			.attr("y",4)
			.attr("fill", function(d,i){
				return cols[order[d.race]];
			})
			.attr("fill-opacity","0.4")
			.attr("stroke-opacity","0.5")
			.attr("stroke-width","0")
			.attr("stroke", function(d,i){
				return cols[order[d.race]];
			})
			;

			D	
			.transition()
			.delay(function(d,i){
				try{
					var delay = (order[d.race]*300)+200;
					if(!delay){throw "bad_delay"}
				}
				catch(e){
					var delay = 0;
				}
				finally{
					return delay;
				}
			})
			.duration(700)
			.attr("x", function(d,i){
				if(d.z===null){
					//console.log("Missing value: " + JSON.stringify(d));
					return "-100%"
				}
				else{
					return valScale(d.z) + "%";
				}
			});

			//nested svg
			var avg_u = groups.select("g.avg_layer")
			.selectAll("svg")
			.data(function(d,i){
				return d.avg;
			});

			var avg_e = avg_u.enter().append("svg")
				.style("width","10px")
				.style("height","30px")
				//avg_e.append("rect").attr("width","3").attr("height","20").attr("x","1").attr("y",0);
				//avg_e.append("rect").attr("width","1").attr("height","20").attr("x","2").attr("y",0);
				//avg_e.append("rect").attr("width","5").attr("height","10").attr("x","0").attr("y",16);
				avg_e.append("path").attr("d","M6.5,16 l5,10 l-10,0 z");

			avg_e.merge(avg_u)
				.attr("x", function(d,i){
					var avg = d.values[0].avg;
					return valScale(avg) + "%"
				}).attr("y", function(d,i){
					return groupScale(d.key)+2;
				})
				.selectAll("path")
				.attr("stroke","#eeeeee")
				.attr("stroke-width",0)
				.attr("fill",function(d,i){return "#555555"})
				//.style("shape-rendering","crispEdges")
				;

			var currently_selected_geo = null;
			function selectGeo(code, persistent, duration){
				var dur = arguments.length > 2 ? duration : 500;
				//console.log(code + ": " + name);
				var svgs_u = groups.select("g.anno_layer").selectAll("svg").data(function(d,i){
					var averages = {};
					(function(){
						var i = -1;
						while(++i < d.avg.length){
							averages[d.avg[i].key] = d.avg[i].values[0].avg;
						}
					})();


					var m = d.obs.map(function(d,i){
						var r = {};
						r.key = d.key;
						var vals = d.values.filter(function(d,i){
							return d.fips === code && d.z !== null;
						});
						r.value = vals.length > 0 && vals[0].fips === code ? vals[0] : null;
						r.above_average = r.value === null || r.value.z >= averages[r.key];
						return r;
					}).filter(function(d,i){
						return d.value !== null;
					});
					return m;
				}, function(d){return d.key});
					svgs_u.exit().remove();
				var svgs_e = svgs_u.enter().append("svg").attr("width","200px").attr("height","100px").attr("x","50%");
					//svgs_e.append("rect").attr("width","3").attr("height","21").attr("x","1").attr("y","0")
					//svgs_e.append("rect").attr("width","1").attr("height","21").attr("x","2").attr("y","0")
					//svgs_e.append("rect").attr("width","3").attr("height","10").attr("x","1").attr("y",17);
					
					//svgs_e.append("rect").attr("height","10px").attr("width","300px").attr("fill","yellow").attr("x","6").attr("y","0");
					//svgs_e.append("rect").attr("height","10px").attr("width","100px").attr("fill","brown").attr("x","6").attr("y","0").style("shape-rendering","crispEdges");
					svgs_e.append("path").attr("d","M106.5,16 l5,10 l-10,0 z");
					svgs_e.append("text").text("name").attr("x",113).attr("y",26).style("font-size","11px").text("Label").attr("fill","#666666");

				var svgs = svgs_e.merge(svgs_u);

				svgs.attr("y", function(d,i){
						return groupScale(d.key)+2;
					})
					.select("path")
					.attr("fill",function(d,i){
						return cols[order[d.value.race]];
					})
					
				svgs.transition()
					.duration(dur)
					.attr("x", function(d,i){
						var z = d.value.z;
						return valScale(z) + "%"
					})
					//.style("shape-rendering","crispEdges")
					;

				svgs.select("text").text(function(d,i){
					return format.sh1(d.value.share);
				}).attr("text-anchor",function(d,i){
					return d.above_average ? "start" : "end";
				}).attr("x", function(d,i){
					return d.above_average ? 113 : 100;
				})
				;

				vlabels.select("tspan.var-label-place").text(function(d,i){
					return " / Highlighting " + geo_lookup[code];
				});

				if(persistent){
					dom.select.node().value = currently_selected_geo = code;
				}
			}

			if(!!Array.prototype.filter && !!Array.prototype.map){ 
				var geo_init = false;
				dom.select.on("change",function(d,i){
					var val = this.value;
					try{
						var g = geos[this.selectedIndex-1];

						if(g.fips!==val){
							throw "ERROR";
						}
					}
					catch(e){
						console.log(e);
						var g = geos[0];
						//this.value = g.fips;
					}

					selectGeo(g.fips, true, geo_init ? 500 : 0);
					geo_init = true;
				});

				var hover_timer;
				D.on("mouseenter", function(d,i){
					clearTimeout(hover_timer);
					//hover_timer = setTimeout(function(){selectGeo(d.fips, 0)},50)
					selectGeo(d.fips, false, 100);
					//var thiz = d3.select(this);
					//thiz.attr("width","5").attr("height","20").attr("transform","translate(-1,-3)").style("pointer-events","none");
				});

				D.on("mouseleave", function(d,i){
					clearTimeout(hover_timer);
					if(currently_selected_geo){
						hover_timer = setTimeout(function(){
							selectGeo(currently_selected_geo, true, 100);
						}, 1000);
					}
				})

				D.on("mousedown", function(d,i){
					clearTimeout(hover_timer);
					selectGeo(d.fips, true, 100);
				})
			}
			else{
				dom.select.remove();
			}
			/*var avg_dots = groups.select("g.avg_layer")
			.selectAll("circle")
			.data(function(d,i){
				return d.avg;
			});

			avgs.enter().append("circle").merge(avgs)
			.attr("cx", function(d,i){
				var avg = d.values[0].avg;
				return valScale(avg) + "%"
			})
			.attr("transform","translate(1.5,0)")
			.attr("cy", function(d,i){
				return groupScale(d.key)+20;
			})
			.attr("stroke","#eeeeee")
			.attr("stroke-width",0)
			.attr("fill","#333333")
			.attr("r",3)
			;*/

	});
}

document.addEventListener("DOMContentLoaded", main);


//build select menu


