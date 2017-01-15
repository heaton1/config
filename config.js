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
			module: 'compliments',
			position: 'bottom_bar',
			config: {
				updateInterval: '1800000',
				compliments: {
					morning: [
						'What a beautiful morning!',
						'Enjoy your day!',
						'Good Morning!',
						'How was your sleep?'
						],
					afternoon: [
						'Hey good lookin!',
						'Looking good today!',
 						'You\'re doing great!',
						'Looking good!'
						],
					evening: [
						'Wow, you look great!',
						'You look nice!'
						]
					}
				}
		},
		{
                        module: 'MMM-WunderGround',
                        position: 'top_left',
                        header: 'WEATHER FORECAST - Firestone',
                        config: {
                                apikey: '4305987481d7cc5a',
                                pws: 'CO/Firestone',
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
                        header: 'PITTSFIELD',
                        position: 'top_left',
                        config: {
                                location: 'IL/Pittsfield',
                                locationID: '4247060',  //ID from http://www.op$
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
