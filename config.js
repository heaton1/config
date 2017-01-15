/* Magic Mirror Config Sample
 * 
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
        
var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_right'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_right',
			config: {
				maximumEntries: '3',
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		{
                        module: 'MMM-WunderGround',
                        position: 'top_left',
                        header: 'WEATHER FORECAST - Pittsfield',
                        config: {
                                apikey: '4305987481d7cc5a',
                                pws: 'IL/Pittsfield',
                                fcdaycount: '3',
				UseCardinals: 1,
                                }
                },
		{
                        module: 'currentweather',
                        header: 'Concordia, KS',
                        position: 'top_left',
                        config: {
                                location: 'KS/Concordia',
                                locationID: '4269872',  //ID from http://www.openweathermap.org
                                appid: '088d61e4f215b53e21c3cff9d7fc2009'
                        }
                },
		{
                        module: 'currentweather',
                        header: 'WINTERPARK, CO',
                        position: 'top_left',
                        config: {
                                location: 'CO/Fraser',
                                locationID: '4993369',  //ID from http://www.op$
                                appid: '088d61e4f215b53e21c3cff9d7fc2009'
                        }
                },
		{
                        module: 'currentweather',
                        header: 'Firestone',
                        position: 'top_left',
                        config: {
                                location: 'CO/Firestone',
                                locationID: '5577008',  //ID from http://www.op$
                                appid: '088d61e4f215b53e21c3cff9d7fc2009'
                        }
                },
		{
			module: 'MMM-wordnik',
			position: 'bottom_right',
			config: {
				api_key: '6607e5ab695d014afb00b0a53d40fe8549d68636ea788e7d7',
				}	
		},
		{
			module: 'stocks',
			position: 'bottom_bar',
			config: {
				stocks: 'AAPL,CAT,CHK,CSCO,DE,F,FB,FMCC,FNMA,FTK,GWPH,HZNP,IBM,INTC,LVS,POT,SWKS,WFM,NVDA,WM,KO,PFE,GE,RIG,MDT',
				updateInterval: 37000
				}
		},		
		{
			module: 'mmm-systemtemperature',
			position: 'center_top',
			classes: 'small dimmed',
		},
	]

};
 
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
