//to do: remove all obs with missing values from the data
//to do: widths of titles at narrow width are too wide
//refine interactions

import dir from "../../js-modules/rackspace.js";
import dimensions from "../../js-modules/dimensions.js";
import format from "../../js-modules/formats.js";

var fp = dir.local().url("/data/emp_status.json");

function main(){
	var geos = [{fips:"99999", name:"Median (typical) jurisdiction"},{"fips":"06001c","name":"Alameda County, CA"},{"fips":"35001a","name":"Albuquerque, NM"},{"fips":"42003c","name":"Allegheny County, PA"},{"fips":"24003c","name":"Anne Arundel County, MD"},{"fips":"24005c","name":"Baltimore County, MD"},{"fips":"24510a","name":"Baltimore, MD"},{"fips":"34003c","name":"Bergen County, NJ"},{"fips":"48029c","name":"Bexar County, TX"},{"fips":"25025a","name":"Boston, MA"},{"fips":"12009c","name":"Brevard County, FL"},{"fips":"25005c","name":"Bristol County, MA"},{"fips":"36047a","name":"Brooklyn and Staten Island, New York City"},{"fips":"12011c","name":"Broward County, FL"},{"fips":"42017c","name":"Bucks County, PA"},{"fips":"34007c","name":"Camden County, NJ"},{"fips":"17031a","name":"Chicago, IL"},{"fips":"32003b","name":"Clark County (excluding Las Vegas), NV"},{"fips":"13067c","name":"Cobb County, GA"},{"fips":"48085c","name":"Collin County, TX"},{"fips":"06013c","name":"Contra Costa County, CA"},{"fips":"17031b","name":"Cook County (excluding Chicago), IL"},{"fips":"39035c","name":"Cuyahoga County, OH"},{"fips":"48113c","name":"Dallas County, TX"},{"fips":"13089c","name":"DeKalb County, GA"},{"fips":"42045c","name":"Delaware County, PA"},{"fips":"48121c","name":"Denton County, TX"},{"fips":"08031a","name":"Denver, CO"},{"fips":"26163a","name":"Detroit, MI"},{"fips":"31055c","name":"Douglas County, NE"},{"fips":"17043c","name":"DuPage County, IL"},{"fips":"08041c","name":"El Paso County, CO"},{"fips":"48141a","name":"El Paso, TX"},{"fips":"36029c","name":"Erie County, NY"},{"fips":"25009c","name":"Essex County, MA"},{"fips":"34013c","name":"Essex County, NJ"},{"fips":"51059c","name":"Fairfax County, VA"},{"fips":"09001c","name":"Fairfield County, CT"},{"fips":"48157c","name":"Fort Bend County, TX"},{"fips":"39049c","name":"Franklin County, OH"},{"fips":"06019c","name":"Fresno County, CA"},{"fips":"13121c","name":"Fulton County, GA"},{"fips":"13135c","name":"Gwinnett County, GA"},{"fips":"39061c","name":"Hamilton County, OH"},{"fips":"48201c","name":"Harris County, TX"},{"fips":"09003c","name":"Hartford County, CT"},{"fips":"27053c","name":"Hennepin County, MN"},{"fips":"48215c","name":"Hidalgo County, TX"},{"fips":"12057c","name":"Hillsborough County, FL"},{"fips":"15003c","name":"Honolulu County, HI"},{"fips":"34017c","name":"Hudson County, NJ"},{"fips":"18097a","name":"Indianapolis, IN"},{"fips":"29095c","name":"Jackson County, MO"},{"fips":"12031a","name":"Jacksonville, FL"},{"fips":"01073c","name":"Jefferson County, AL"},{"fips":"20091c","name":"Johnson County, KS"},{"fips":"17089c","name":"Kane County, IL"},{"fips":"26081c","name":"Kent County, MI"},{"fips":"06029c","name":"Kern County, CA"},{"fips":"53033b","name":"King County (excluding Seattle), WA"},{"fips":"17097c","name":"Lake County, IL"},{"fips":"42071c","name":"Lancaster County, PA"},{"fips":"32003a","name":"Las Vegas, NV"},{"fips":"12071c","name":"Lee County, FL"},{"fips":"06037a","name":"Los Angeles, CA"},{"fips":"06037b","name":"Los Angeles County (excluding Los Angeles), CA"},{"fips":"21111a","name":"Louisville/Jefferson County, KY"},{"fips":"26099c","name":"Macomb County, MI"},{"fips":"36061a","name":"Manhattan, New York City"},{"fips":"04013b","name":"Maricopa County (excluding Phoenix), AZ"},{"fips":"37119c","name":"Mecklenburg County, NC"},{"fips":"12086c","name":"Miami-Dade County, FL"},{"fips":"34023c","name":"Middlesex County, NJ"},{"fips":"55079a","name":"Milwaukee, WI"},{"fips":"34025c","name":"Monmouth County, NJ"},{"fips":"36055c","name":"Monroe County, NY"},{"fips":"24031c","name":"Montgomery County, MD"},{"fips":"39113c","name":"Montgomery County, OH"},{"fips":"42091c","name":"Montgomery County, PA"},{"fips":"47037a","name":"Nashville-Davidson metropolitan government, TN"},{"fips":"36059c","name":"Nassau County, NY"},{"fips":"10003c","name":"New Castle County, DE"},{"fips":"09009c","name":"New Haven County, CT"},{"fips":"26125c","name":"Oakland County, MI"},{"fips":"34029c","name":"Ocean County, NJ"},{"fips":"40109c","name":"Oklahoma County, OK"},{"fips":"06059c","name":"Orange County, CA"},{"fips":"12095c","name":"Orange County, FL"},{"fips":"12099c","name":"Palm Beach County, FL"},{"fips":"34031c","name":"Passaic County, NJ"},{"fips":"42101a","name":"Philadelphia, PA"},{"fips":"04013a","name":"Phoenix, AZ"},{"fips":"53053c","name":"Pierce County, WA"},{"fips":"04019c","name":"Pima County, AZ"},{"fips":"12103c","name":"Pinellas County, FL"},{"fips":"12105c","name":"Polk County, FL"},{"fips":"41051a","name":"Portland, OR"},{"fips":"24033c","name":"Prince George's County, MD"},{"fips":"44007c","name":"Providence County, RI"},{"fips":"36081a","name":"Queens, New York City"},{"fips":"27123c","name":"Ramsey County, MN"},{"fips":"06065c","name":"Riverside County, CA"},{"fips":"06067c","name":"Sacramento County, CA"},{"fips":"49035c","name":"Salt Lake County, UT"},{"fips":"06071c","name":"San Bernardino County, CA"},{"fips":"06073c","name":"San Diego County, CA"},{"fips":"06075a","name":"San Francisco, CA"},{"fips":"06077c","name":"San Joaquin County, CA"},{"fips":"06081c","name":"San Mateo County, CA"},{"fips":"06085c","name":"Santa Clara County, CA"},{"fips":"53033a","name":"Seattle, WA"},{"fips":"47157c","name":"Shelby County, TN"},{"fips":"53061c","name":"Snohomish County, WA"},{"fips":"06099c","name":"Stanislaus County, CA"},{"fips":"29189c","name":"St. Louis County, MO"},{"fips":"36103c","name":"Suffolk County, NY"},{"fips":"39153c","name":"Summit County, OH"},{"fips":"48439c","name":"Tarrant County, TX"},{"fips":"36005a","name":"The Bronx, New York City"},{"fips":"48453c","name":"Travis County, TX"},{"fips":"040143c","name":"Tulsa County, AZ"},{"fips":"34039c","name":"Union County, NJ"},{"fips":"49049c","name":"Utah County, UT"},{"fips":"06111c","name":"Ventura County, CA"},{"fips":"37183c","name":"Wake County, NC"},{"fips":"41067c","name":"Washington County, OR"},{"fips":"11001a","name":"Washington, DC"},{"fips":"26163b","name":"Wayne County (excluding Detroit), MI"},{"fips":"36119c","name":"Westchester County, NY"},{"fips":"17197c","name":"Will County, IL"},{"fips":"25027c","name":"Worcester County, MA"}];
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
		.style("margin","1em auto")
		.style("min-height","500px")
		.classed("m-i makesans",true)
		;

	dom.titlebox = dom.wrap.append("div");
		dom.titlebox.append("p").style("font-size","0.8em").text("INTERACTIVE DATA").style("margin","0em");
		dom.titlebox.append("p").style("font-size","1.5em").style("font-weight","bold").text("Share of the working age population that is employed, unemployed, or not in the labor force").style("margin","0.25em 0em");
		dom.titlebox.append("p").style("font-size","1em").text("By race, in cities and counties with at least 500,000 residents, 2015").style("margin","0em");

	dom.menu = dom.titlebox.append("div").classed("c-fix",true).style("margin","1em 0em 0em 0em");
	
	dom.selectWrap = dom.menu.append("div").style("float","left").style("margin-right","2em");
	dom.select = dom.selectWrap.append("select");
	var options = dom.select.selectAll("option")
							.data(geos)
							.enter()
							.append("option")
							.attr("value",function(d,i){return d.fips})
							.text(function(d,i){return d.name})
							;

	options.filter(function(d,i){return i==0}).attr("selected",true);

	var cols = ["#e86e25", "#a91317", "#5ca86b", "#4d76b1", "#adc32b", "#88bbca"];
	cols.background = "#fafafa";
	var legend = {};
	legend.wrap = dom.menu.append("div").style("float","left").style("margin","0.5em 0em").classed("c-fix",true);


	legend.selected = legend.wrap.append("div").style("float","left").classed("c-fix",true).style("margin-right","2em");
	legend.selected.append("div").style("width","16px").style("height","1.25em").style("float","left")
				  .append("svg").attr("width","100%").attr("height","100%")
				  .selectAll("path").data([1]).enter()
				  .append("path").attr("d",function(d,i){
				  	return "M" + (6.5+(10*i)) + ",5 l5,9 l-10,0 z"
				  }).attr("fill",function(d,i){
				  	return "#333333";
				  	//return d;
				  })
				  ;
	legend.selectedGeo = legend.selected.append("p").style("float","left").text("Selected jurisdiction");

	legend.average = legend.wrap.append("div").style("float","left").classed("c-fix",true).style("opacity","0");
	legend.average.append("div").style("width","16px").style("height","1.25em").style("float","left")
				  .append("svg").attr("width","100%").attr("height","100%")
				  .selectAll("circle").data([1]).enter()
				  .append("circle").attr("cx",6.5).attr("cy",9).attr("r",4).attr("fill","#333333")
				  ;

	legend.average.append("p").style("float","left").text("Median (typical) jurisdiction");



	dom.svg = dom.wrap.append("svg").style("height","100%").style("width","100%");

	dom.plotgroup = {};
	dom.plotgroup.height = 27; //height of a single line of dots
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
						.sortKeys(function(a,b){
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
						});

		//need to rollup the data
		var mapped = vars.map(function(d,i,a){
			var obs = data.obs[d.code];
			var avg = data.avg[d.code];
			var extent = d3.extent(obs, function(d){return d.share});
			var valScale = d3.scaleLinear().domain(extent).range([10,90]);
			var ticks = valScale.ticks(6).map(function(d){
				return {v:d, x:valScale(d)+"%"}
			});

			return {var:d, obs:rollup.entries(obs), avg:rollup.entries(avg), scale:valScale, ticks:ticks};
		});

		var groupHeight = (groups.length*dom.plotgroup.height) + (dom.plotgroup.pad*2);
			dom.svg.style("height",((groupHeight*3)+120)+"px");
		var groupScale = d3.scaleBand().domain(groups).range([0,groupHeight]).round(true).paddingOuter(0.75).paddingInner(0.5);
		
		var pctBounds = ["5%", "95%"];
		var pctBounds2 = ["9%", "91%"];

		var bottom_layer = dom.svg.append("g");
		var plot_layer = dom.svg.append("g");
		var top_layer = dom.svg.append("g");

		//source line
		dom.wrap.append("div").style("width","100px")
							.style("height","0px")
							.style("border-top","1px solid #aaaaaa")
							.style("margin","0em "+pctBounds[0]+" 0.5em "+pctBounds[0]);
		dom.wrap.append("p").classed("m-i-footer",true)
				.text("Source: 2015 American Community Survey. Data are limited to the civilian population aged 18 to 64, not living in group quarters.")
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
			groups_enter.append("g").classed("avg_layer",true).attr("transform","translate(1.5,0)").style("pointer-events","none");
			groups_enter.append("g").classed("anno_layer",true).attr("transform","translate(-405,0)").style("pointer-events","none");

		var groups = groups_enter.merge(groups_update)
			.attr("transform",function(d,i){
				return "translate(0," + ((i*(groupHeight+30))+50) + ")"
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
		var vlines = vlineLayer.selectAll("line.vaxis").data(function(d,i){
			return d.ticks;
		});
			vlines.exit().remove();
			vlines.enter().append("line").classed("vaxis",true).merge(vlines)
				.attr("x1", function(d,i){return d.x})
				.attr("x2", function(d,i){return d.x})
				.attr("y1", function(d){return 7})
				.attr("y2", function(d){return groupHeight-35})
				.attr("stroke","#aaaaaa")
				.attr("stroke-width","1")
				.attr("stroke-dasharray","2,3")
				.style("shape-rendering","crispEdges")
				;

		//tick marks
		var tickMarks = vlineLayer.selectAll("line.tick-mark").data(function(d,i){
			return d.ticks;
			});

			tickMarks.exit().remove();
			tickMarks.enter().append("line").classed("tick-mark",true).merge(tickMarks)
				.attr("x1", function(d,i){return d.x})
				.attr("x2", function(d,i){return d.x})
				.attr("y1", function(d){return groupHeight-36})
				.attr("y2", function(d){return groupHeight-30})
				.attr("stroke","#333333")
				.attr("stroke-width","1")
				.style("shape-rendering","crispEdges")
				;

		var tickMarksLab = vlineLayer.selectAll("text.tick-mark").data(function(d,i){
			return d.ticks;
			});
			tickMarksLab.exit().remove();
			tickMarksLab.enter().append("text").classed("tick-mark",true).merge(tickMarksLab)
				.attr("x", function(d,i){return d.x})
				.attr("y", function(d){return groupHeight-17})
				.text(function(d,i){return format.sh0(d.v);})
				.attr("text-anchor","middle")
				.style("font-size","13px")
				.attr("fill","#666666")
				;

		/*tickMarksLab.selectAll("text.xaxis-label")
					 .data(["Standardized values*"])
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
					 ;*/


		//labels
		var label_layers = groups.select("g.label_layer");
		//line labels
		var labels = label_layers.selectAll("text.group-label").data(function(d,i){
			return d.obs;
		});
		labels.exit().remove();
		labels.enter().append("text").classed("group-label",true).merge(labels)
		.attr("x", "9%")
		.attr("y", function(d){return groupScale(d.key)+10})
		.attr("text-anchor","end")
		.text(function(d){return d.key})
		.style("font-size","13px")
		.style("font-weight","bold")
		.attr("fill", function(d,i){
				return d3.color(cols[order[d.key]]).darker(1);
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
			   .attr("x", "50%")
			   //.attr("x","15%")
			   .attr("dx","0")
			   .attr("y", "0")
			   //.attr("text-anchor","start")
			   .attr("text-anchor","middle")
			   .style("font-size","1em")
			   .text(function(d){return d.label})
			   .style("font-weight","normal")
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
				var valScale = d.scale;
				return d.obs.map(function(d,i){
					d.scale = valScale;
					return d;
				});
			});

			places.exit().remove();
		var dots = places.enter()
						.append("g")
						.merge(places)
						.attr("transform",function(d,i){return "translate(0," + groupScale(d.key) + ")"})
						.selectAll("rect").data(function(d,i){
							var valScale = d.scale;
							return d.values.map(function(d,i){
								d.scale = valScale;
								return d;
							})
						});
		dots.exit().remove();

		var dots_enter = dots.enter().append("rect");
			dots_enter.append("title");

		var D = dots_enter.merge(dots)
			//.attr("r",3)
			.attr("x","50%")
			.attr("width","3px")
			.attr("height","24px")
			.attr("y",0)
			.attr("fill", function(d,i){
				return cols[order[d.race]];
			})
			.attr("fill-opacity","0.3")
			.attr("stroke-opacity","0.5")
			.attr("stroke-width","0")
			.attr("stroke", function(d,i){
				return cols[order[d.race]];
			})
			.style("shape-rendering","crispEdges")
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
				if(d.share===null){
					//console.log("Missing value: " + JSON.stringify(d));
					return "-100%"
				}
				else{
					return d.scale(d.share) + "%";
				}
			});

		D.select("title").text(function(d,i){
			return d.name;
		});

		/*AVERAGE DOTS*/
		var avg_dots = groups.select("g.avg_layer")
			.selectAll("circle")
			.data(function(d,i){
				return d.avg.map(function(obs){
					obs.scale = d.scale;
					return obs;
				});
			});

			avg_dots.exit().remove();
		var avgs = avg_dots.enter().append("circle")
						.merge(avg_dots)
						.attr("cy",function(d,i){return groupScale(d.key)+20})
						.attr("cx","50%")
						.attr("r",4)
						.attr("fill", function(d,i){return cols[order[d.key]];})
						.style("opacity",0)
						.attr("cx",function(d,i){
							return d.scale(d.values[0].avg_share)+"%";
						})
						;
			/*END AVERAGE DOTS*/



			var currently_selected_geo = null;
			function selectGeo(code, persistent, duration, isolate){
				var dur = arguments.length > 2 ? duration : 500;
				if(code===null){
					groups.select("g.anno_layer").selectAll("svg").remove();
				}
				else{

					//console.log(code + ": " + name);
					var svgs_u = groups.select("g.anno_layer").selectAll("svg").data(function(d,i){
						var averages = {};
						(function(){
							var i = -1;
							while(++i < d.avg.length){
								averages[d.avg[i].key] = d.avg[i].values[0].avg_share;
							}
						})();

						//emp, unemp, nilf
						var status = d.var.code;
						var valScale = d.scale;

						if(code==="99999"){
							var m = d.avg.map(function(d,i){
								var r = {};
								r.race = d.key;
								r.status = status;
								r.value = d.values[0];
								r.value.share = r.value.avg_share;
								r.x = valScale(r.value.avg_share);
								r.above_average = true;
								return r;
							});
							legend.average.transition().duration(dur).style("opacity","0");
							avgs.transition().duration(dur).style("opacity","0");
						}
						else{
							//look through the observations by race, filter the value for the selected geo code
							var m = d.obs.map(function(d,i){
								var r = {};
								r.race = d.key;
								r.status = status;
								var vals = d.values.filter(function(d,i){
									return d.fips === code && d.share !== null;
								});
								r.value = vals.length > 0 && vals[0].fips === code ? vals[0] : null;
								r.x = r.value !== null ? valScale(r.value.share) : 0;
								
								r.above_average = r.value === null || r.value.share >= averages[r.race];

								if(r.x > 85 || r.x < 15){r.above_average = !r.above_average}

								return r;
							}).filter(function(d,i){
								return d.value !== null;
							});

							legend.average.transition().duration(dur).style("opacity","1");
							avgs.transition().duration(dur).style("opacity","1");
						}
						return m;
					}, function(d){
						return d.race
					});

						svgs_u.exit().remove();
					var svgs_e = svgs_u.enter().append("svg").attr("width","800px").attr("height","100px").attr("x","50%");
					var svgs_pn = svgs_e.append("g").classed("place_name",true).attr("transform","translate(0,22)");
							//svgs_pn.append("rect").attr("width","50%").attr("height","22px").attr("x","0").attr("y","-22").attr("fill",cols.background).attr("stroke","red");
							svgs_pn.append("text").text("X").attr("x",405).attr("y",0).attr("text-anchor","start").style("font-size","13px").text("Label");
						//svgs_e.append("rect").attr("x","391.5").attr("y","37").attr("height","13px").attr("width","30px").attr("fill",cols.background).attr("fill-opacity",0.85);
						svgs_e.append("path").attr("d","M406.5,37 l6.5,12 l-13,0 z").attr("stroke","#ffffff").attr("stroke-width","1");
						svgs_e.append("text").classed("value",true).text("name").attr("x",413).attr("y",48).style("font-size","13px").text("Label");//.attr("fill","#666666");

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

					var place_name_groups = svgs.select("g.place_name").style("visibility","hidden");
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
						.style("font-size","13px")
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

						/*place_name_groups.interrupt().style("opacity", function(d,i){
							return d.race==isolate[1] && d.status==isolate[0] ? "1" : "0"; 
						});*/

					} else{
						svgs.interrupt()
							.style("opacity",1)
							.transition()
							.duration(dur)
							.style("opacity",1)
							.attr("x", function(d,i){
								return d.x + "%"
							})
							;

						//place_name_groups.interrupt().transition().duration(dur).style("opacity", 0);
					}	

			

					/*vlabels.select("tspan.var-label-place").text(function(d,i){
						return " / Highlighting " + geo_lookup[code];
					});*/

					var selectHighlightTimer;
					if(persistent){
						dom.select.node().value = currently_selected_geo = code;
						clearTimeout(selectHighlightTimer);
						dom.select.classed("on-change",true);
						selectHighlightTimer = setTimeout(function(){
							dom.select.classed("on-change",false);
						}, dur-250 < 0 ? 250 : dur-250);

						/*dom.select.interrupt().style("border-color",null)
							  .transition().duration(dur/2).style("border-color","red")
							  .transition().duration(dur/2).style("border-color",null)
							  ;*/
						//legend.selectedGeo.text(place);
					}
					else{
						clearTimeout(selectHighlightTimer);
						dom.select.classed("on-change", false);
						dom.select.node().value = "99999";
					}
				}
			} //end selectGeo
			selectGeo("99999", true, 700);

			if(!!Array.prototype.filter && !!Array.prototype.map){ 
				dom.select.on("change",function(d,i){
					var val = this.value;
					try{
						var g = geos[this.selectedIndex];

						if(g.fips!==val){
							throw "ERROR";
						}
					}
					catch(e){
						console.log(e);
						var g = geos[0];
						//this.value = g.fips;
					}

					selectGeo(g.fips, true, 700);
				});

				var hover_timer;

				D.on("mousedown", function(d,i){
					clearTimeout(hover_timer);
					selectGeo(d.fips, true, 700);
				})
			}
			else{
				dom.select.remove();
			}

	});
}

document.addEventListener("DOMContentLoaded", main);


//build select menu


