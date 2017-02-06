//to do: remove all obs with missing values from the data
//to do: widths of titles at narrow width are too wide
//refine interactions

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
		.style("margin","1em auto")
		.style("min-height","500px")
		.classed("m-i makesans",true)
		;

	dom.titlebox = dom.wrap.append("div");
		dom.titlebox.append("p").style("font-size","0.8em").text("INTERACTIVE DATA").style("margin","0em");
		dom.titlebox.append("p").style("font-size","1.5em").style("font-weight","bold").text("Share of the working age population that is employed, unemployed, or not in the labor force").style("margin","0.25em 0em");
		dom.titlebox.append("p").style("font-size","1em").text("By race, in cities and counties with at least 500,000 residents, 2015").style("margin","0em");

	dom.menu = dom.titlebox.append("div").classed("c-fix",true).style("margin","1.5em 0em 0em 0em");
	
	dom.selectWrap = dom.menu.append("div").style("float","left").style("margin-right","2em");
	dom.select = dom.selectWrap.append("select");
	var options = dom.select.selectAll("option")
							.data([{fips:"99999", name:"Select a jurisdiction"}].concat(geos))
							.enter()
							.append("option")
							.attr("value",function(d,i){return d.fips})
							.text(function(d,i){return d.name})
							;

	options.filter(function(d,i){return i==0}).attr("disabled",true).attr("selected",true);

	var cols = ["#e86e25", "#a91317", "#5ca86b", "#4d76b1", "#adc32b", "#88bbca"];
	cols.background = "#fafafa";
	var legend = {};
	legend.wrap = dom.menu.append("div").style("float","left").style("margin","0.5em 0em").classed("c-fix",true);
	legend.avg = legend.wrap.append("div").style("float","left").classed("c-fix",true).style("margin-right","1em");
		legend.avg.append("div").style("width","16px").style("height","1.25em").style("float","left")
				  .append("svg").attr("width","100%").attr("height","100%")
				  .append("path").attr("d","M6.5,5 l5,9 l-10,0 z").attr("fill","#333333")
				  ;
		legend.avg.append("p").style("float","left").text("Average for race/ethnicity");

	legend.selected = legend.wrap.append("div").style("float","left").classed("c-fix",true);
	legend.selected.append("div").style("width","46px").style("height","1.25em").style("float","left")
				  .append("svg").attr("width","100%").attr("height","100%")
				  .selectAll("path").data(cols.slice(0,4)).enter()
				  .append("path").attr("d",function(d,i){
				  	return "M" + (6.5+(10*i)) + ",5 l5,9 l-10,0 z"
				  }).attr("fill",function(d,i){return d})
				  ;
	legend.selectedGeo = legend.selected.append("p").style("float","left").text("Selected jurisdiction");



	dom.svg = dom.wrap.append("svg").style("height","100%").style("width","100%");

	dom.plotgroup = {};
	dom.plotgroup.height = 29; //height of a single line of dots
	dom.plotgroup.pad = 60;

	//variables
	var vars = [{code:"Employed", label:"Employed"}, {code:"Unemployed", label:"Unemployed"}, {code:"NILF", label:"Not in the labor force"}]

	d3.json(fp, function(error, data){

		var groups = ["White","Black","Latino","Asian"];

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
			dom.svg.style("height",((groupHeight*3)+120)+"px");
		var groupScale = d3.scaleBand().domain(groups).range([0,groupHeight]).round(true).paddingOuter(0.75).paddingInner(0.5);
		var valScale = d3.scaleLinear().domain(extent).range([5,95]);

		var pctBounds = [valScale(-3.5)+"%", valScale(3.5)+"%"];
		var pctBounds2 = [valScale(-3.25)+"%", valScale(3.25)+"%"];

		var ticks = valScale.ticks(6);
			ticks.pop();
		var ticks2 = ticks.map(function(d){
				return {v:d, x:valScale(d)+"%"}
			});

		var bottom_layer = dom.svg.append("g");
		var plot_layer = dom.svg.append("g");
		var top_layer = dom.svg.append("g");

		//source line
		dom.wrap.append("div").style("width","100px").style("height","0px").style("border-top","1px solid #aaaaaa").style("margin","1em "+pctBounds[0]);
		dom.wrap.append("p")
				.text("Source: 2015 American Community Survey. Data are limited to the civilian population aged 18 to 64, not living in group quarters.")
				.style("font-size","13px")
				.style("font-style","italic")
				.style("color","#666666")
				.style("margin", "0em " + pctBounds[0])
				;

		dom.titlebox.style("margin", "0em " + pctBounds[0]);

		//variable groupings: emp, unemp, nilf
		var groups_update = plot_layer.selectAll("g").data(mapped);
			groups_update.exit().remove();
		var groups_enter = groups_update.enter().append("g");
			groups_enter.append("g").classed("axis_layer",true);
			groups_enter.append("g").classed("place_layer",true);
			groups_enter.append("g").classed("place_block_layer",true).style("pointer-events","none");
			groups_enter.append("g").classed("vline_layer",true);
			groups_enter.append("g").classed("label_layer",true).append("line").style("pointer-events","none");
			groups_enter.append("g").classed("avg_layer",true).attr("transform","translate(-5,0)").style("pointer-events","none");
			groups_enter.append("g").classed("anno_layer",true).attr("transform","translate(-405,0)").style("pointer-events","none");

		var groups = groups_enter.merge(groups_update)
			.attr("transform",function(d,i){
				return "translate(0," + ((i*(groupHeight+15))+30) + ")"
			});

		//horizontal axes
		var hlines = groups.select("g.axis_layer").selectAll("line").data(function(d,i){
			return d.obs;
		});
		hlines.exit().remove();
		hlines.enter().append("line").merge(hlines)
		.attr("x1", pctBounds2[0])
		.attr("x2", pctBounds2[1])
		.attr("y1", function(d){return groupScale(d.key)+6})
		.attr("y2", function(d){return groupScale(d.key)+6})
		.attr("stroke","#aaaaaa")
		.attr("stroke-width","1")
		.attr("stroke-dasharray","2,3")
		.style("shape-rendering","crispEdges")
		;

		//vertical axes
		var vlineLayer = groups.select("g.vline_layer");
		var vlines = vlineLayer.selectAll("line.vaxis").data(ticks2);
			vlines.exit().remove();
			vlines.enter().append("line").classed("vaxis",true).merge(vlines)
				.attr("x1", function(d,i){return d.x})
				.attr("x2", function(d,i){return d.x})
				.attr("y1", function(d){return 7})
				.attr("y2", function(d){return groupHeight-25})
				.attr("stroke","#aaaaaa")
				.attr("stroke-width","1")
				.attr("stroke-dasharray","2,3")
				.style("shape-rendering","crispEdges")
				;

		//tick marks
		var lastAxisLayer = vlineLayer.filter(function(d,i){return i==2});
		var tickMarks = lastAxisLayer.selectAll("line.tick-mark").data(ticks2);
			tickMarks.exit().remove();
			tickMarks.enter().append("line").classed("tick-mark",true).merge(tickMarks)
				.attr("x1", function(d,i){return d.x})
				.attr("x2", function(d,i){return d.x})
				.attr("y1", function(d){return groupHeight-26})
				.attr("y2", function(d){return groupHeight-20})
				.attr("stroke","#333333")
				.attr("stroke-width","1")
				.style("shape-rendering","crispEdges")
				;

		var tickMarksLab = lastAxisLayer.selectAll("text.tick-mark").data(ticks2);
			tickMarksLab.exit().remove();
			tickMarksLab.enter().append("text").classed("tick-mark",true).merge(tickMarksLab)
				.attr("x", function(d,i){return d.x})
				.attr("y", function(d){return groupHeight-7})
				.text(function(d,i){return d.v === 0 ? "0 (Avg.)" : d.v})
				.attr("text-anchor","middle")
				.style("font-size","13px")
				;

		lastAxisLayer.selectAll("text.xaxis-label")
					 .data(["Distance from the overall average", "(number of standard deviations)"])
					 .enter()
					 .append("text")
					 .classed("xaxis-label",true)
					 .attr("x", valScale(0)+"%")
					 .attr("y", function(d,i){
					 	return (groupHeight+17) + (i*18);
					 })
					 .attr("text-anchor","middle")
					 .text(function(d,i){return d})
					 .style("font-size","13px")
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
		.attr("y", function(d){return groupScale(d.key)-2})
		.attr("text-anchor","middle")
		.text(function(d){return d.key.toUpperCase()})
		.style("font-size","11px")
		.attr("fill", function(d,i){
				return d3.color(cols[order[d.key]]).darker(3);
		})
		;

		//variable labels
		var vlabels = label_layers.selectAll("text.var-label").data(function(d,i){
			return [d.var];
		});
		vlabels.exit().remove();
		vlabels.enter()
			   .append("text")
			   .classed("var-label",true)
			   .merge(vlabels)
			   .attr("x", valScale(0)+"%")
			   //.attr("x","15%")
			   .attr("dx","0")
			   .attr("y", "0")
			   //.attr("text-anchor","start")
			   .attr("text-anchor","middle")
			   .style("font-size","1em")
			   .text(function(d){return d.label})
			   .style("font-weight","bold")
			   ;

		//boxes around variable labels
		var labelBorders = label_layers.select("line").attr("x1", pctBounds[0])
													  .attr("x2", pctBounds[1])
													  .attr("y1","7")
													  .attr("y2","7")
													  .attr("stroke","#aaaaaa")
													  .attr("stroke-width","1")
													  .style("shape-rendering","crispEdges")
													  ;

		//append a rectangle to cover bottom of "dots" -- enables mouse events to occur in space below data
		var blanks = groups.select("g.place_block_layer")
							.selectAll("rect").data(function(d,i){
								return d.avg.map(function(d){return d.key});
							});
		blanks.enter().append("rect").merge(blanks)
						.attr("width","100%")
						.attr("height","14px")
						.attr("x","5")
						.attr("y",function(d){
							return groupScale(d)+12;
						})
						.attr("fill",cols.background)
						.attr("fill-opacity","1")
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
			.attr("height","24px")
			.attr("y",0)
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
			var avg_u = groups.select("g.avg_layer").selectAll("svg")
				.data(function(d,i){
					return d.avg;
				});

			var avg_e = avg_u.enter().append("svg")
				.style("width","10px")
				.style("height","30px")
				//avg_e.append("rect").attr("width","3").attr("height","20").attr("x","1").attr("y",0);
				//avg_e.append("rect").attr("width","1").attr("height","20").attr("x","2").attr("y",0);
				//avg_e.append("rect").attr("width","5").attr("height","10").attr("x","0").attr("y",16);
				avg_e.append("path").attr("d","M6.5,13 l5,9 l-10,0 z");

			avg_e.merge(avg_u)
				.attr("x", function(d,i){
					var avg = d.values[0].avg;
					return valScale(avg) + "%"
				}).attr("y", function(d,i){
					return groupScale(d.key);
				})
				.selectAll("path")
				.attr("stroke","#eeeeee")
				.attr("stroke-width",0)
				.attr("fill",function(d,i){return "#555555"})
				//.style("shape-rendering","crispEdges")
				;

			var currently_selected_geo = null;
			var currently_selected_group = null;
			function selectGeo(code, persistent, duration, isolate){
				var dur = arguments.length > 2 ? duration : 500;
				if(code===null){
					//no-op
					//groups.select("g.anno_layer").selectAll("svg").remove();
				}
				else{

					//console.log(code + ": " + name);
					var svgs_u = groups.select("g.anno_layer").selectAll("svg").data(function(d,i){
						var averages = {};
						(function(){
							var i = -1;
							while(++i < d.avg.length){
								averages[d.avg[i].key] = d.avg[i].values[0].avg;
							}
						})();

						//emp, unemp, nilf
						var status = d.var.code;

						//look through the observations by race, filter the value for the selected geo code
						var m = d.obs.map(function(d,i){
							var r = {};
							r.race = d.key;
							r.status = status;
							var vals = d.values.filter(function(d,i){
								return d.fips === code && d.z !== null;
							});
							r.value = vals.length > 0 && vals[0].fips === code ? vals[0] : null;
							r.x = r.value !== null ? valScale(r.value.z) : 0;
							
							r.above_average = r.value === null || r.value.z >= averages[r.race];

							if(r.x > 80 || r.x < 20){r.above_average = !r.above_average}

							return r;
						}).filter(function(d,i){
							return d.value !== null;
						});
						return m;
					}, function(d){
						return d.race
					});

						svgs_u.exit().remove();
					var svgs_e = svgs_u.enter().append("svg").attr("width","800px").attr("height","100px").attr("x","50%");
					var svgs_pn = svgs_e.append("g").classed("place_name",true).attr("transform","translate(0,22)");
							//svgs_pn.append("rect").attr("width","50%").attr("height","22px").attr("x","0").attr("y","-22").attr("fill",cols.background).attr("stroke","red");
							svgs_pn.append("text").text("X").attr("x",405).attr("y",0).attr("text-anchor","start").style("font-size","11px").text("Label");
						svgs_e.append("path").attr("d","M406.5,38 l5,9 l-10,0 z");
						svgs_e.append("text").classed("value",true).text("name").attr("x",413).attr("y",47).style("font-size","11px").text("Label");//.attr("fill","#666666");

					var svgs = svgs_e.merge(svgs_u)
									.attr("y", function(d,i){
										return groupScale(d.race) - 25;
									});

					svgs.select("path")
						.attr("fill",function(d,i){
							return cols[order[d.value.race]];
						});

					svgs.select("text.value")
						.attr("text-anchor",function(d,i){
							return d.above_average ? "start" : "end";
						}).attr("x", function(d,i){
							return d.above_average ? 413 : 400;
						})
						.text(function(d,i){
							return format.sh1(d.value.share);
						})
						;

					var place = geo_lookup[code];
					legend.selectedGeo.text(place);

					var place_name_groups = svgs.select("g.place_name");
					var place_names = place_name_groups.selectAll("text").data(function(d,i){
							var ta = d.above_average ? "start" : "end";
							return [{p:place, ta:ta}, {p:place, ta:ta}]
						});
						place_names.exit().remove();
						place_names.enter().append("text").merge(place_names)
						.attr("text-anchor", function(d,i){
							return d.ta;
						})
						.attr("fill",function(d,i){
							return i==0 ? cols.background : null;
						})
						.attr("stroke", cols.background)
						.attr("stroke-width", function(d,i){
							return i==0 ? 4 : 0;
						})
						.attr("x",405)
						.attr("y",1)
						.style("font-size","11px")
						.text(function(d,i){return d.p})
						;


					if(!!isolate){
						svgs.interrupt()
							.style("opacity",function(d,i){
								return d.status==isolate[0] && d.race==isolate[1] ? 1 : 0;
							})
							.attr("x", function(d,i){
								return d.x + "%";
							})
							.transition()
							.delay(function(d,i){
								return d.status==isolate[0] && d.race==isolate[1] ? 0 : 100;
							})
							.duration(function(d,i){
								return d.status==isolate[0] && d.race==isolate[1] ? 0 : dur;
							})
							.attr("x", function(d,i){
								return d.x + "%";
							})
							.style("opacity",1)
							/*.on("end", function(d,i){
								var thiz = d3.select(this);
								thiz.style("opacity",1);
							})*/
							;
							currently_selected_group = isolate[1];
					} else{
						svgs.interrupt()
							.style("opacity",1)
							.transition()
							.duration(dur)
							.style("opacity",1)
							.attr("x", function(d,i){
								var z = d.value.z;
								return valScale(z) + "%"
							})
							;
					}	

					place_name_groups.style("display", function(d,i){
						return d.race==currently_selected_group ? "inline" : "none"; //d.status==isolate[0] && 
					});			

					/*vlabels.select("tspan.var-label-place").text(function(d,i){
						return " / Highlighting " + geo_lookup[code];
					});*/

					if(persistent){
						dom.select.node().value = currently_selected_geo = code;
					}
				}
			} //end selectGeo

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

					selectGeo(g.fips, true, geo_init ? 700 : 0);
					geo_init = true;
				});

				var hover_timer;
				D.on("mouseenter", function(d,i){
					clearTimeout(hover_timer);
					//hover_timer = setTimeout(function(){selectGeo(d.fips, 0)},50)
					selectGeo(d.fips, false, 700, [d.status, d.race]);
					//var thiz = d3.select(this);
					//thiz.attr("width","5").attr("height","20").attr("transform","translate(-1,-3)").style("pointer-events","none");
				});

				D.on("mouseleave", function(d,i){
					clearTimeout(hover_timer);

					hover_timer = setTimeout(function(){
						selectGeo(currently_selected_geo, true, 700);
					}, 500);
				})

				D.on("mousedown", function(d,i){
					clearTimeout(hover_timer);
					selectGeo(d.fips, true, 700);
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


