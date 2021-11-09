const site = {
  "digits": 3,
  "metadata": {
    "package": "data/datapackage.json",
    "datasets": ["district", "county", "tract"],
    "variables": ["ID", "2year_colleges_access_scores:norm_2sefca", "drive_times_nearest_2year_colleges:median_drive_time_top5", "3rd_grade_median_read_score:median_read_pass_rate", "daycare_services_access_scores:daycare_norm_3sfca", "daycare_services_access_scores:daycare_cnt", "drive_times_nearest_daycares:median_drive_time_top5", "dei_index:norm_dei", "dentist_access_scores:dent_e2sfca", "dentist_access_scores:dent_cnt", "download_speeds:download", "trade_schools_access_scores:norm_3sfca", "drive_times_nearest_trade_schools:median_drive_time_top5", "have_computer:perc_have_computer", "have_internet:perc_have_internet_access", "health_literacy_estimates:health_literacy_estimate", "no_health_insurance_19_to_64:no_hlth_ins_pct", "obgyn_access_scores:obgyn_e2sfca", "obgyn_access_scores:obgyn_cnt", "pct_pop_broadband:perc_w_broadband", "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL", "pediatrics_access_scores:ped_e2sfca", "pediatrics_access_scores:ped_cnt", "post_hs_education:perc_post_hs_edu", "preventable_hospitalizations:prevent_hosp_rate", "primary_care_access_scores:prim_e2sfca", "primary_care_access_scores:prim_cnt", "time"],
    "info": {
      "district": {
        "bytes": 99091,
        "encoding": "ISO-8859-1",
        "md5": "d15b90a076c7172d29214f4224518111",
        "sha512": "irIE9UZBU7qUkhztF2OaseZ330FKaMv81q60LhWy3BVthIIjwMmyQgl1OCTz0czmQbcr4zuJGLnyWff7nr6pbw==",
        "format": "csv",
        "name": "district",
        "filename": "health_district.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2021-10-28 19:56:08",
        "last_modified": "2021-10-20 00:50:32",
        "rowcount": 245,
        "schema": {
          "fields": [
            {
              "name": "ID",
              "duplicates": 210,
              "type": "integer",
              "missing": 0,
              "mean": 18,
              "sd": 10.1202,
              "min": 1,
              "max": 35
            },
            {
              "name": "2year_colleges_access_scores:norm_2sefca",
              "duplicates": 220,
              "info": {
                "type": "index",
                "short_name": "2-year college access (score)",
                "long_name": "2 year college access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of 2-year college accessibility based on supply and demand of providers",
                "long_description": "Demand = whole population, supply = total number of students enrolled in a year (graduate and undergraduate)",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "norm_2sefca",
                "full_name": "2year_colleges_access_scores:norm_2sefca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores"
              },
              "type": "float",
              "missing": 210,
              "mean": 18.0222,
              "sd": 22.6205,
              "min": 0,
              "max": 100
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 209,
              "info": {
                "type": "",
                "short_name": "2-year college access (drive time)",
                "long_name": "2-year college access by median dive time to the five closest colleges in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges"
              },
              "type": "float",
              "missing": 210,
              "mean": 52.2886,
              "sd": 32.3618,
              "min": 9,
              "max": 122.8
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 210,
              "info": {
                "type": "",
                "short_name": "3rd grade population passing reading",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "",
                "long_description": "",
                "statement": "The median percent of 3rd graders with passing reading scores in {region_name} is {median_read_pass_rate} percent",
                "name": "Virginia Department of Education",
                "url": "",
                "citations": "",
                "category": "Education",
                "measure": "median_read_pass_rate",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "db_name": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score"
              },
              "type": "float",
              "missing": 175,
              "mean": 11.1071,
              "sd": 5.3003,
              "min": 0,
              "max": 28
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 209,
              "info": {
                "type": "index",
                "short_name": "Day care access (score)",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. Demand = 0-12 years, supply = day care capacity",
                "statement": "The daycare accessibility score for {region_name} is  {daycare_norm_3sfca}",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "daycare_norm_3sfca",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores"
              },
              "type": "float",
              "missing": 210,
              "mean": 40.3427,
              "sd": 22.6432,
              "min": 0,
              "max": 100
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 209,
              "info": {
                "type": "count",
                "short_name": "Day care access (count)",
                "long_name": "Access to day care by count",
                "short_description": "Count of day cares based on provider locations",
                "long_description": "Count of day cares based on provider locations. Address data was collected from Virginia Department of Social Services day care search tool.  Day care capacity count",
                "statement": "There are {daycare_cnt} daycares in {region_name}",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "",
                "category": "Education",
                "measure": "daycare_cnt",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "db_name": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores"
              },
              "type": "integer",
              "missing": 210,
              "mean": 10654.4,
              "sd": 12153.9074,
              "min": 1027,
              "max": 67563
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 212,
              "info": {
                "type": "",
                "short_name": "Day care access (drive time)",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares"
              },
              "type": "float",
              "missing": 210,
              "mean": 13.28,
              "sd": 12.5682,
              "min": 1.8,
              "max": 62.1
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 143,
              "info": {
                "type": "index",
                "short_name": "Digital equity index",
                "long_name": "Digitial equity index",
                "short_description": "",
                "long_description": "",
                "statement": "The digital equity index for {region_name} is {norm_dei}",
                "name": "",
                "url": "",
                "citations": "Gallardo, Robert (2020)",
                "category": "Broadband",
                "measure": "norm_dei",
                "full_name": "dei_index:norm_dei",
                "db_name": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index"
              },
              "type": "float",
              "missing": 140,
              "mean": 51.4114,
              "sd": 27.409,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 209,
              "info": {
                "type": "index",
                "short_name": "Dental care access (score)",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step ehanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {region_name} is {dent_e2sfca}",
                "name": "SafeGraph Core",
                "url": "https://www.safegraph.com/products/core",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "dent_e2sfca",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores"
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0003,
              "sd": 0.0001,
              "min": 0.0001,
              "max": 0.0007
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 211,
              "info": {
                "type": "count",
                "short_name": "Dental care access (count)",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {dent_cnt} densits in {region_name}",
                "name": "SafeGraph Core",
                "url": "https://www.safegraph.com/products/core",
                "citations": "",
                "category": "Health",
                "measure": "dent_cnt",
                "full_name": "dentist_access_scores:dent_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores"
              },
              "type": "integer",
              "missing": 210,
              "mean": 122.8857,
              "sd": 170.4947,
              "min": 15,
              "max": 1000
            },
            {
              "name": "download_speeds:download",
              "duplicates": 139,
              "info": {
                "type": "float",
                "short_name": "Average download speed",
                "long_name": "Average download speed (MB/s)",
                "short_description": "",
                "long_description": "",
                "statement": "The average download speed for internet connections in {region_name} is {download} MB/s",
                "name": "Ookla",
                "url": "https://www.ookla.com/ookla-for-good/open-data",
                "citations": "",
                "category": "Broadband",
                "measure": "download",
                "full_name": "download_speeds:download",
                "db_name": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds"
              },
              "type": "float",
              "missing": 140,
              "mean": 126.4226,
              "sd": 38.9209,
              "min": 27.5995,
              "max": 208.2953
            },
            {
              "name": "trade_schools_access_scores:norm_3sfca",
              "duplicates": 221,
              "info": {
                "type": "index",
                "short_name": "Trade school access (score)",
                "long_name": "Trade school access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Demand = whole population, supply = total number of students enrolled in a year ( undergraduate)",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "norm_3sfca",
                "full_name": "trade_schools_access_scores:norm_3sfca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores"
              },
              "type": "float",
              "missing": 210,
              "mean": 20.4887,
              "sd": 24.1244,
              "min": 0,
              "max": 100
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 209,
              "info": {
                "type": "",
                "short_name": "Trade school access (drive time)",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools"
              },
              "type": "float",
              "missing": 210,
              "mean": 83.0486,
              "sd": 70.8312,
              "min": 14,
              "max": 300.9
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 209,
              "info": {
                "type": "",
                "short_name": "Population with a computer",
                "long_name": "Percent of population with a computer",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_have_computer",
                "full_name": "have_computer:perc_have_computer",
                "db_name": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer"
              },
              "type": "float",
              "missing": 210,
              "mean": 88.3058,
              "sd": 6.6137,
              "min": 71.9306,
              "max": 97.4945
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 209,
              "info": {
                "type": "",
                "short_name": "Population with internet access",
                "long_name": "Percent of population with internet access",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_have_internet_access",
                "full_name": "have_internet:perc_have_internet_access",
                "db_name": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet"
              },
              "type": "float",
              "missing": 210,
              "mean": 83.4686,
              "sd": 8.2578,
              "min": 65.2433,
              "max": 96.4738
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 240,
              "info": {
                "type": "index",
                "short_name": "Health literacy estimate",
                "long_name": "Health literacy estimate",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "Medical Expenditure Panel Survey; American Community Survey",
                "url": "https://www.meps.ahrq.gov/mepsweb/; https://www.census.gov/programs-surveys/acs.html",
                "citations": "Stavitz et al. (2020); Liang and Branch (2017)",
                "category": "Education",
                "measure": "health_literacy_estimate",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates"
              },
              "type": "float",
              "missing": 210,
              "mean": 0.1767,
              "sd": 0.207,
              "min": -0.995,
              "max": 0.2193
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 77,
              "info": {
                "type": "percent",
                "short_name": "Uninsured population",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. This data comes from Question 16 of the Person section of the American Community Survey.",
                "statement": "{no_hlth_ins_pct} percent of the population has no health insurance in  {region_name}",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Health",
                "measure": "no_hlth_ins_pct",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "db_name": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64"
              },
              "type": "float",
              "missing": 70,
              "mean": 2.3091,
              "sd": 2.4521,
              "min": 0.2,
              "max": 15.4533
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 209,
              "info": {
                "type": "index",
                "short_name": "OBGYN care access (score)",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {region_name}  is {obgyn_e2sfca}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "obgyn_e2sfca",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores"
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0006,
              "sd": 0.0004,
              "min": 0,
              "max": 0.0018
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 213,
              "info": {
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "long_name": "OBGYN care acess by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {obgyn_cnt}  OBGYNs in {region_name}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "obgyn_cnt",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores"
              },
              "type": "integer",
              "missing": 210,
              "mean": 88,
              "sd": 106.409,
              "min": 7,
              "max": 611
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 139,
              "info": {
                "type": "percent",
                "short_name": "Population with broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "",
                "long_description": "",
                "statement": "{perc_w_broadband} percent of the population in {region_name} has a broadband connection",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_w_broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "db_name": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband"
              },
              "type": "float",
              "missing": 140,
              "mean": 0.7744,
              "sd": 0.1013,
              "min": 0.5415,
              "max": 0.9462
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 139,
              "info": {
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "",
                "long_description": "",
                "statement": "{perc_w_cable_fiber_DSL} percent of the population in {region_name} has a cable fiber or DSL internet connection",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_w_cable_fiber_DSL",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "db_name": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl"
              },
              "type": "float",
              "missing": 140,
              "mean": 0.621,
              "sd": 0.1498,
              "min": 0.3044,
              "max": 0.8797
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 209,
              "info": {
                "type": "",
                "short_name": "Pediatric care access (score)",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "",
                "statement": "",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "ped_e2sfca",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores"
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0019,
              "sd": 0.0013,
              "min": 0.0005,
              "max": 0.0055
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 211,
              "info": {
                "type": "",
                "short_name": "Pediatric care access (count)",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "",
                "statement": "",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "ped_cnt",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores"
              },
              "type": "integer",
              "missing": 210,
              "mean": 112.9143,
              "sd": 146.6692,
              "min": 9,
              "max": 798
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 209,
              "info": {
                "type": "percent",
                "short_name": "Population with post-high school education",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Education",
                "measure": "perc_post_hs_edu",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "db_name": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education"
              },
              "type": "float",
              "missing": 210,
              "mean": 0.605,
              "sd": 0.1175,
              "min": 0.4143,
              "max": 0.8654
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 2,
              "info": {
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{prevent_hosp_rate} percent of the hospitalizations in {region_name}  were preventable (due to conditions usually treated in outpatient settings)",
                "name": "County Health Rankings",
                "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description",
                "citations": "",
                "category": "Health",
                "measure": "prevent_hosp_rate",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "db_name": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations"
              },
              "type": "float",
              "missing": 0,
              "mean": 4915.6413,
              "sd": 1551.2408,
              "min": 2106,
              "max": 15047.25
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 209,
              "info": {
                "type": "index",
                "short_name": "Primary care access (score)",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {region_name}  is  {primacare_e2sfca}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "prim_e2sfca",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores"
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0023,
              "sd": 0.0011,
              "min": 0.0011,
              "max": 0.0058
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 209,
              "info": {
                "type": "count",
                "short_name": "Primary care access (count)",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {primacare_cnt} primary care physicians in {region_name}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "prim_cnt",
                "full_name": "primary_care_access_scores:prim_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores"
              },
              "type": "integer",
              "missing": 210,
              "mean": 560.4571,
              "sd": 581.3071,
              "min": 74,
              "max": 3360
            },
            {
              "name": "time",
              "duplicates": 238,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time"
              },
              "type": "integer",
              "missing": 0,
              "mean": 2018,
              "sd": 2.0041,
              "min": 2015,
              "max": 2021
            }
          ]
        }
      },
      "county": {
        "bytes": 356341,
        "encoding": "ISO-8859-1",
        "md5": "65b4fbddf79f2007cdb5fbac04872e16",
        "sha512": "kB6r/HRqbNhwZHpQqo+spli9hLajrfiEjryueo+nzVzXO6LL1akOhhO1D2sHffzc1g1DUamYTkxJLBPnbzWrNg==",
        "format": "csv",
        "name": "county",
        "filename": "county.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2021-10-28 19:56:08",
        "last_modified": "2021-10-20 00:50:32",
        "rowcount": 938,
        "schema": {
          "fields": [
            {
              "name": "ID",
              "duplicates": 804,
              "type": "integer",
              "missing": 0,
              "mean": 51265.8657,
              "sd": 270.8542,
              "min": 51001,
              "max": 51840
            },
            {
              "name": "2year_colleges_access_scores:norm_2sefca",
              "duplicates": 937,
              "info": {
                "type": "index",
                "short_name": "2-year college access (score)",
                "long_name": "2 year college access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of 2-year college accessibility based on supply and demand of providers",
                "long_description": "Demand = whole population, supply = total number of students enrolled in a year (graduate and undergraduate)",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "norm_2sefca",
                "full_name": "2year_colleges_access_scores:norm_2sefca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores"
              },
              "type": "string",
              "missing": 938,
              "table": {
                "1": 0
              }
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 811,
              "info": {
                "type": "",
                "short_name": "2-year college access (drive time)",
                "long_name": "2-year college access by median dive time to the five closest colleges in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges"
              },
              "type": "float",
              "missing": 805,
              "mean": 58.7816,
              "sd": 25.1372,
              "min": 9,
              "max": 128.6
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 880,
              "info": {
                "type": "",
                "short_name": "3rd grade population passing reading",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "",
                "long_description": "",
                "statement": "The median percent of 3rd graders with passing reading scores in {region_name} is {median_read_pass_rate} percent",
                "name": "Virginia Department of Education",
                "url": "",
                "citations": "",
                "category": "Education",
                "measure": "median_read_pass_rate",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "db_name": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score"
              },
              "type": "float",
              "missing": 684,
              "mean": 11.5177,
              "sd": 7.4558,
              "min": 0,
              "max": 57
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 804,
              "info": {
                "type": "index",
                "short_name": "Day care access (score)",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. Demand = 0-12 years, supply = day care capacity",
                "statement": "The daycare accessibility score for {region_name} is  {daycare_norm_3sfca}",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "daycare_norm_3sfca",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores"
              },
              "type": "float",
              "missing": 805,
              "mean": 38.6391,
              "sd": 21.6239,
              "min": 0,
              "max": 100
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 807,
              "info": {
                "type": "count",
                "short_name": "Day care access (count)",
                "long_name": "Access to day care by count",
                "short_description": "Count of day cares based on provider locations",
                "long_description": "Count of day cares based on provider locations. Address data was collected from Virginia Department of Social Services day care search tool.  Day care capacity count",
                "statement": "There are {daycare_cnt} daycares in {region_name}",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "",
                "category": "Education",
                "measure": "daycare_cnt",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "db_name": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores"
              },
              "type": "integer",
              "missing": 805,
              "mean": 2803.7895,
              "sd": 7034.2298,
              "min": 19,
              "max": 64562
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 834,
              "info": {
                "type": "",
                "short_name": "Day care access (drive time)",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares"
              },
              "type": "float",
              "missing": 805,
              "mean": 10.4207,
              "sd": 9.4238,
              "min": 0.9,
              "max": 49.6
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 542,
              "info": {
                "type": "index",
                "short_name": "Digital equity index",
                "long_name": "Digitial equity index",
                "short_description": "",
                "long_description": "",
                "statement": "The digital equity index for {region_name} is {norm_dei}",
                "name": "",
                "url": "",
                "citations": "Gallardo, Robert (2020)",
                "category": "Broadband",
                "measure": "norm_dei",
                "full_name": "dei_index:norm_dei",
                "db_name": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index"
              },
              "type": "float",
              "missing": 539,
              "mean": 46.8091,
              "sd": 23.3058,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 810,
              "info": {
                "type": "index",
                "short_name": "Dental care access (score)",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step ehanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {region_name} is {dent_e2sfca}",
                "name": "SafeGraph Core",
                "url": "https://www.safegraph.com/products/core",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "dent_e2sfca",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores"
              },
              "type": "float",
              "missing": 805,
              "mean": 0.0003,
              "sd": 0.0002,
              "min": 0,
              "max": 0.0011
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 887,
              "info": {
                "type": "count",
                "short_name": "Dental care access (count)",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {dent_cnt} densits in {region_name}",
                "name": "SafeGraph Core",
                "url": "https://www.safegraph.com/products/core",
                "citations": "",
                "category": "Health",
                "measure": "dent_cnt",
                "full_name": "dentist_access_scores:dent_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores"
              },
              "type": "integer",
              "missing": 805,
              "mean": 32.3383,
              "sd": 89.6895,
              "min": 0,
              "max": 894
            },
            {
              "name": "download_speeds:download",
              "duplicates": 538,
              "info": {
                "type": "float",
                "short_name": "Average download speed",
                "long_name": "Average download speed (MB/s)",
                "short_description": "",
                "long_description": "",
                "statement": "The average download speed for internet connections in {region_name} is {download} MB/s",
                "name": "Ookla",
                "url": "https://www.ookla.com/ookla-for-good/open-data",
                "citations": "",
                "category": "Broadband",
                "measure": "download",
                "full_name": "download_speeds:download",
                "db_name": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds"
              },
              "type": "float",
              "missing": 539,
              "mean": 111.8176,
              "sd": 49.3439,
              "min": 8.1556,
              "max": 234.4607
            },
            {
              "name": "trade_schools_access_scores:norm_3sfca",
              "duplicates": 883,
              "info": {
                "type": "index",
                "short_name": "Trade school access (score)",
                "long_name": "Trade school access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Demand = whole population, supply = total number of students enrolled in a year ( undergraduate)",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "norm_3sfca",
                "full_name": "trade_schools_access_scores:norm_3sfca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores"
              },
              "type": "float",
              "missing": 805,
              "mean": 9.9285,
              "sd": 18.1286,
              "min": 0,
              "max": 100
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 806,
              "info": {
                "type": "",
                "short_name": "Trade school access (drive time)",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools"
              },
              "type": "float",
              "missing": 805,
              "mean": 99.0586,
              "sd": 66.2404,
              "min": 10.1,
              "max": 322.7
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 804,
              "info": {
                "type": "",
                "short_name": "Population with a computer",
                "long_name": "Percent of population with a computer",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_have_computer",
                "full_name": "have_computer:perc_have_computer",
                "db_name": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer"
              },
              "type": "float",
              "missing": 805,
              "mean": 85.8138,
              "sd": 6.83,
              "min": 66.6667,
              "max": 98.2511
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 804,
              "info": {
                "type": "",
                "short_name": "Population with internet access",
                "long_name": "Percent of population with internet access",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_have_internet_access",
                "full_name": "have_internet:perc_have_internet_access",
                "db_name": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet"
              },
              "type": "float",
              "missing": 805,
              "mean": 79.9714,
              "sd": 8.6137,
              "min": 61.2392,
              "max": 97.3068
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 932,
              "info": {
                "type": "index",
                "short_name": "Health literacy estimate",
                "long_name": "Health literacy estimate",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "Medical Expenditure Panel Survey; American Community Survey",
                "url": "https://www.meps.ahrq.gov/mepsweb/; https://www.census.gov/programs-surveys/acs.html",
                "citations": "Stavitz et al. (2020); Liang and Branch (2017)",
                "category": "Education",
                "measure": "health_literacy_estimate",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates"
              },
              "type": "float",
              "missing": 805,
              "mean": 0.3165,
              "sd": 0.6769,
              "min": -0.995,
              "max": 3.005
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 612,
              "info": {
                "type": "percent",
                "short_name": "Uninsured population",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. This data comes from Question 16 of the Person section of the American Community Survey.",
                "statement": "{no_hlth_ins_pct} percent of the population has no health insurance in  {region_name}",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Health",
                "measure": "no_hlth_ins_pct",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "db_name": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64"
              },
              "type": "float",
              "missing": 273,
              "mean": 1.8443,
              "sd": 2.5411,
              "min": 0,
              "max": 21.15
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 826,
              "info": {
                "type": "index",
                "short_name": "OBGYN care access (score)",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {region_name}  is {obgyn_e2sfca}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "obgyn_e2sfca",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores"
              },
              "type": "float",
              "missing": 805,
              "mean": 0.0004,
              "sd": 0.0004,
              "min": 0,
              "max": 0.0022
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 890,
              "info": {
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "long_name": "OBGYN care acess by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {obgyn_cnt}  OBGYNs in {region_name}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "obgyn_cnt",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores"
              },
              "type": "integer",
              "missing": 805,
              "mean": 23.1579,
              "sd": 60.3872,
              "min": 0,
              "max": 562
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 538,
              "info": {
                "type": "percent",
                "short_name": "Population with broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "",
                "long_description": "",
                "statement": "{perc_w_broadband} percent of the population in {region_name} has a broadband connection",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_w_broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "db_name": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband"
              },
              "type": "float",
              "missing": 539,
              "mean": 0.7311,
              "sd": 0.1038,
              "min": 0.4825,
              "max": 0.9542
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 538,
              "info": {
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "",
                "long_description": "",
                "statement": "{perc_w_cable_fiber_DSL} percent of the population in {region_name} has a cable fiber or DSL internet connection",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_w_cable_fiber_DSL",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "db_name": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl"
              },
              "type": "float",
              "missing": 539,
              "mean": 0.5431,
              "sd": 0.1717,
              "min": 0.1007,
              "max": 0.8975
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 809,
              "info": {
                "type": "",
                "short_name": "Pediatric care access (score)",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "",
                "statement": "",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "ped_e2sfca",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores"
              },
              "type": "float",
              "missing": 805,
              "mean": 0.0014,
              "sd": 0.0015,
              "min": 0,
              "max": 0.0126
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 891,
              "info": {
                "type": "",
                "short_name": "Pediatric care access (count)",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "",
                "statement": "",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "ped_cnt",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores"
              },
              "type": "integer",
              "missing": 805,
              "mean": 29.7143,
              "sd": 82.4288,
              "min": 0,
              "max": 753
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 804,
              "info": {
                "type": "percent",
                "short_name": "Population with post-high school education",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Education",
                "measure": "perc_post_hs_edu",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "db_name": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education"
              },
              "type": "float",
              "missing": 805,
              "mean": 0.5561,
              "sd": 0.1148,
              "min": 0.3501,
              "max": 0.9162
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 113,
              "info": {
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{prevent_hosp_rate} percent of the hospitalizations in {region_name}  were preventable (due to conditions usually treated in outpatient settings)",
                "name": "County Health Rankings",
                "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description",
                "citations": "",
                "category": "Health",
                "measure": "prevent_hosp_rate",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "db_name": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations"
              },
              "type": "integer",
              "missing": 35,
              "mean": 5161.0676,
              "sd": 1879.0309,
              "min": 2091,
              "max": 18247
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 804,
              "info": {
                "type": "index",
                "short_name": "Primary care access (score)",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {region_name}  is  {primacare_e2sfca}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "prim_e2sfca",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores"
              },
              "type": "float",
              "missing": 805,
              "mean": 0.002,
              "sd": 0.0014,
              "min": 0.0001,
              "max": 0.0091
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 844,
              "info": {
                "type": "count",
                "short_name": "Primary care access (count)",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {primacare_cnt} primary care physicians in {region_name}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "prim_cnt",
                "full_name": "primary_care_access_scores:prim_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores"
              },
              "type": "integer",
              "missing": 805,
              "mean": 147.4887,
              "sd": 341.3477,
              "min": 1,
              "max": 3152
            },
            {
              "name": "time",
              "duplicates": 931,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time"
              },
              "type": "integer",
              "missing": 0,
              "mean": 2018,
              "sd": 2.0011,
              "min": 2015,
              "max": 2021
            }
          ]
        }
      },
      "tract": {
        "bytes": 5322462,
        "encoding": "ISO-8859-1",
        "md5": "a7ecbfe35fd681626a1cabcdaa41ad32",
        "sha512": "u8bnxNYqh5yNozbWoh4Bpz99M4S0Pc3rjO+0H6FVDk78UgJkiQstZgN9ROimbn4hW1ZuMVNatxb+FiLTIR9vMg==",
        "format": "csv",
        "name": "tract",
        "filename": "tract.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2021-10-28 19:56:10",
        "last_modified": "2021-10-20 00:50:32",
        "rowcount": 14280,
        "schema": {
          "fields": [
            {
              "name": "ID",
              "duplicates": 12240,
              "type": "integer",
              "missing": 0,
              "mean": 47952159338,
              "sd": 12667328050.086,
              "min": 51001,
              "max": 51840000302
            },
            {
              "name": "2year_colleges_access_scores:norm_2sefca",
              "duplicates": 14279,
              "info": {
                "type": "index",
                "short_name": "2-year college access (score)",
                "long_name": "2 year college access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of 2-year college accessibility based on supply and demand of providers",
                "long_description": "Demand = whole population, supply = total number of students enrolled in a year (graduate and undergraduate)",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "norm_2sefca",
                "full_name": "2year_colleges_access_scores:norm_2sefca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores"
              },
              "type": "string",
              "missing": 14280,
              "table": {
                "1": 0
              }
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 13517,
              "info": {
                "type": "",
                "short_name": "2-year college access (drive time)",
                "long_name": "2-year college access by median dive time to the five closest colleges in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges"
              },
              "type": "float",
              "missing": 12381,
              "mean": 40.1988,
              "sd": 26.679,
              "min": 4.2,
              "max": 177.8
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 14279,
              "info": {
                "type": "",
                "short_name": "3rd grade population passing reading",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "",
                "long_description": "",
                "statement": "The median percent of 3rd graders with passing reading scores in {region_name} is {median_read_pass_rate} percent",
                "name": "Virginia Department of Education",
                "url": "",
                "citations": "",
                "category": "Education",
                "measure": "median_read_pass_rate",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "db_name": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score"
              },
              "type": "string",
              "missing": 14280,
              "table": {
                "1": 0
              }
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 12380,
              "info": {
                "type": "index",
                "short_name": "Day care access (score)",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. Demand = 0-12 years, supply = day care capacity",
                "statement": "The daycare accessibility score for {region_name} is  {daycare_norm_3sfca}",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "daycare_norm_3sfca",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores"
              },
              "type": "float",
              "missing": 12380,
              "mean": 52.4187,
              "sd": 17.5006,
              "min": 0,
              "max": 100
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 13712,
              "info": {
                "type": "count",
                "short_name": "Day care access (count)",
                "long_name": "Access to day care by count",
                "short_description": "Count of day cares based on provider locations",
                "long_description": "Count of day cares based on provider locations. Address data was collected from Virginia Department of Social Services day care search tool.  Day care capacity count",
                "statement": "There are {daycare_cnt} daycares in {region_name}",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "",
                "category": "Education",
                "measure": "daycare_cnt",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "db_name": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores"
              },
              "type": "integer",
              "missing": 12373,
              "mean": 195.5448,
              "sd": 235.0988,
              "min": 0,
              "max": 2273
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 13905,
              "info": {
                "type": "",
                "short_name": "Day care access (drive time)",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "Virginia Department of Social Services",
                "url": "https://www.dss.virginia.gov/facility/search/cc.cgi",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares"
              },
              "type": "float",
              "missing": 12381,
              "mean": 7.83,
              "sd": 8.0243,
              "min": 0.5,
              "max": 71.7
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 8679,
              "info": {
                "type": "index",
                "short_name": "Digital equity index",
                "long_name": "Digitial equity index",
                "short_description": "",
                "long_description": "",
                "statement": "The digital equity index for {region_name} is {norm_dei}",
                "name": "",
                "url": "",
                "citations": "Gallardo, Robert (2020)",
                "category": "Broadband",
                "measure": "norm_dei",
                "full_name": "dei_index:norm_dei",
                "db_name": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index"
              },
              "type": "float",
              "missing": 8676,
              "mean": 70.9817,
              "sd": 16.8324,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 12510,
              "info": {
                "type": "index",
                "short_name": "Dental care access (score)",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step ehanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {region_name} is {dent_e2sfca}",
                "name": "SafeGraph Core",
                "url": "https://www.safegraph.com/products/core",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "dent_e2sfca",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores"
              },
              "type": "float",
              "missing": 12381,
              "mean": 0.0004,
              "sd": 0.0002,
              "min": 0,
              "max": 0.0011
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 14247,
              "info": {
                "type": "count",
                "short_name": "Dental care access (count)",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {dent_cnt} densits in {region_name}",
                "name": "SafeGraph Core",
                "url": "https://www.safegraph.com/products/core",
                "citations": "",
                "category": "Health",
                "measure": "dent_cnt",
                "full_name": "dentist_access_scores:dent_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores"
              },
              "type": "integer",
              "missing": 13315,
              "mean": 4.457,
              "sd": 4.9641,
              "min": 1,
              "max": 39
            },
            {
              "name": "download_speeds:download",
              "duplicates": 8606,
              "info": {
                "type": "float",
                "short_name": "Average download speed",
                "long_name": "Average download speed (MB/s)",
                "short_description": "",
                "long_description": "",
                "statement": "The average download speed for internet connections in {region_name} is {download} MB/s",
                "name": "Ookla",
                "url": "https://www.ookla.com/ookla-for-good/open-data",
                "citations": "",
                "category": "Broadband",
                "measure": "download",
                "full_name": "download_speeds:download",
                "db_name": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds"
              },
              "type": "float",
              "missing": 8607,
              "mean": 137.4078,
              "sd": 49.3387,
              "min": 5.4356,
              "max": 347.9637
            },
            {
              "name": "trade_schools_access_scores:norm_3sfca",
              "duplicates": 13833,
              "info": {
                "type": "index",
                "short_name": "Trade school access (score)",
                "long_name": "Trade school access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Demand = whole population, supply = total number of students enrolled in a year ( undergraduate)",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Education",
                "measure": "norm_3sfca",
                "full_name": "trade_schools_access_scores:norm_3sfca",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores"
              },
              "type": "float",
              "missing": 12381,
              "mean": 22.1145,
              "sd": 24.095,
              "min": 0,
              "max": 100
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 13330,
              "info": {
                "type": "",
                "short_name": "Trade school access (drive time)",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "National Center for Education Statistics",
                "url": "https://nces.ed.gov/",
                "citations": "",
                "category": "Education",
                "measure": "median_drive_time_top5",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "db_name": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools"
              },
              "type": "float",
              "missing": 12381,
              "mean": 61.2898,
              "sd": 61.2115,
              "min": 4.8,
              "max": 343.6
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 12505,
              "info": {
                "type": "",
                "short_name": "Population with a computer",
                "long_name": "Percent of population with a computer",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_have_computer",
                "full_name": "have_computer:perc_have_computer",
                "db_name": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer"
              },
              "type": "float",
              "missing": 12389,
              "mean": 90.6652,
              "sd": 8.3038,
              "min": 0,
              "max": 100
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 12474,
              "info": {
                "type": "",
                "short_name": "Population with internet access",
                "long_name": "Percent of population with internet access",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_have_internet_access",
                "full_name": "have_internet:perc_have_internet_access",
                "db_name": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet"
              },
              "type": "float",
              "missing": 12389,
              "mean": 86.5308,
              "sd": 10.8146,
              "min": 38.5576,
              "max": 100
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 14266,
              "info": {
                "type": "index",
                "short_name": "Health literacy estimate",
                "long_name": "Health literacy estimate",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "Medical Expenditure Panel Survey; American Community Survey",
                "url": "https://www.meps.ahrq.gov/mepsweb/; https://www.census.gov/programs-surveys/acs.html",
                "citations": "Stavitz et al. (2020); Liang and Branch (2017)",
                "category": "Education",
                "measure": "health_literacy_estimate",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "db_name": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates"
              },
              "type": "float",
              "missing": 12373,
              "mean": 0.4329,
              "sd": 0.8731,
              "min": -2.995,
              "max": 3.005
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 12803,
              "info": {
                "type": "percent",
                "short_name": "Uninsured population",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. This data comes from Question 16 of the Person section of the American Community Survey.",
                "statement": "{no_hlth_ins_pct} percent of the population has no health insurance in  {region_name}",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Health",
                "measure": "no_hlth_ins_pct",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "db_name": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64"
              },
              "type": "float",
              "missing": 4910,
              "mean": 2.7716,
              "sd": 5.3258,
              "min": 0,
              "max": 66.75
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 12726,
              "info": {
                "type": "index",
                "short_name": "OBGYN care access (score)",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {region_name}  is {obgyn_e2sfca}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "obgyn_e2sfca",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores"
              },
              "type": "float",
              "missing": 12381,
              "mean": 0.0007,
              "sd": 0.0005,
              "min": 0,
              "max": 0.0022
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 14236,
              "info": {
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "long_name": "OBGYN care acess by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {obgyn_cnt}  OBGYNs in {region_name}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "obgyn_cnt",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores"
              },
              "type": "integer",
              "missing": 13807,
              "mean": 6.5116,
              "sd": 13.4527,
              "min": 1,
              "max": 137
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 8772,
              "info": {
                "type": "percent",
                "short_name": "Population with broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "",
                "long_description": "",
                "statement": "{perc_w_broadband} percent of the population in {region_name} has a broadband connection",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_w_broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "db_name": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband"
              },
              "type": "float",
              "missing": 8660,
              "mean": 0.8124,
              "sd": 0.134,
              "min": 0,
              "max": 1
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 8748,
              "info": {
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "",
                "long_description": "",
                "statement": "{perc_w_cable_fiber_DSL} percent of the population in {region_name} has a cable fiber or DSL internet connection",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Broadband",
                "measure": "perc_w_cable_fiber_DSL",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "db_name": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl"
              },
              "type": "float",
              "missing": 8660,
              "mean": 0.6813,
              "sd": 0.2062,
              "min": 0,
              "max": 1
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 12574,
              "info": {
                "type": "",
                "short_name": "Pediatric care access (score)",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "",
                "statement": "",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "ped_e2sfca",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores"
              },
              "type": "float",
              "missing": 12381,
              "mean": 0.0022,
              "sd": 0.0018,
              "min": 0,
              "max": 0.013
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 14238,
              "info": {
                "type": "",
                "short_name": "Pediatric care access (count)",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "",
                "statement": "",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "ped_cnt",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores"
              },
              "type": "integer",
              "missing": 13686,
              "mean": 6.6532,
              "sd": 14.8042,
              "min": 1,
              "max": 189
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 12404,
              "info": {
                "type": "percent",
                "short_name": "Population with post-high school education",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "",
                "long_description": "",
                "statement": "",
                "name": "American Community Survey",
                "url": "https://www.census.gov/programs-surveys/acs.html",
                "citations": "",
                "category": "Education",
                "measure": "perc_post_hs_edu",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "db_name": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education"
              },
              "type": "float",
              "missing": 12401,
              "mean": 0.6479,
              "sd": 0.1734,
              "min": 0.1559,
              "max": 1
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 14279,
              "info": {
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{prevent_hosp_rate} percent of the hospitalizations in {region_name}  were preventable (due to conditions usually treated in outpatient settings)",
                "name": "County Health Rankings",
                "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description",
                "citations": "",
                "category": "Health",
                "measure": "prevent_hosp_rate",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "db_name": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations"
              },
              "type": "string",
              "missing": 14280,
              "table": {
                "1": 0
              }
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 12408,
              "info": {
                "type": "index",
                "short_name": "Primary care access (score)",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {region_name}  is  {primacare_e2sfca}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "Lou, Wei (2004); Lou, Wei and Yi Qi (2009); Lou, Wei and Fahui Wang (2003); Saxon, James et al. (2020)",
                "category": "Health",
                "measure": "prim_e2sfca",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores"
              },
              "type": "float",
              "missing": 12381,
              "mean": 0.0024,
              "sd": 0.0015,
              "min": 0,
              "max": 0.0094
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 14175,
              "info": {
                "type": "count",
                "short_name": "Primary care access (count)",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {primacare_cnt} primary care physicians in {region_name}",
                "name": "WebMD Physician Directory",
                "url": "https://doctor.webmd.com/",
                "citations": "",
                "category": "Health",
                "measure": "prim_cnt",
                "full_name": "primary_care_access_scores:prim_cnt",
                "db_name": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores"
              },
              "type": "integer",
              "missing": 12989,
              "mean": 15.1944,
              "sd": 41.2479,
              "min": 1,
              "max": 847
            },
            {
              "name": "time",
              "duplicates": 14273,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time"
              },
              "type": "integer",
              "missing": 0,
              "mean": 2018,
              "sd": 2.0001,
              "min": 2015,
              "max": 2021
            }
          ]
        }
      }
    },
    "file": "data.json"
  },
  "rules": [
    {
      "condition": [
        {
          "id": "selected_district",
          "type": "",
          "value": ""
        }
      ],
      "effects": {
        "display": "sec22"
      }
    }
  ],
  "dataviews": {
    "primary_view": {
      "palette": "selected_palette",
      "y": "selected_variable",
      "x": "selected_year",
      "time_agg": "selected_year",
      "time_filters": [
        {
          "variable": "time",
          "type": ">=",
          "value": "min_year"
        },
        {
          "variable": "time",
          "type": "<=",
          "value": "max_year"
        }
      ],
      "dataset": "shapes",
      "ids": "selected_region",
      "features": {
        "type": "region_type"
      }
    }
  },
  "info": {
    "info0": {
      "subto": ["map0", "plot0"]
    }
  },
  "text": {
    "text6": {
      "text": [
        {
          "button": {
            "b1": {
              "text": [
                "Virginia"
              ],
              "type": "reset",
              "target": "selected_district"
            }
          },
          "text": ["State: ", "b1"]
        },
        {
          "condition": [
            {
              "id": "selected_district",
              "type": "",
              "value": ""
            }
          ],
          "button": {
            "b1": {
              "text": [
                "",
                "selected_district"
              ],
              "type": "reset",
              "target": "selected_county"
            }
          },
          "text": [" > Health District: ", "b1"]
        },
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": ""
            }
          ],
          "text": [" > County: ", "selected_county"]
        }
      ]
    },
    "text7": {
      "text": [
        [
          {
            "text": "Virginia Health Districts",
            "condition": [
              {
                "id": "default",
                "type": "",
                "value": ""
              }
            ]
          },
          {
            "text": ["selected_district", " Counties"],
            "condition": [
              {
                "id": "selected_district",
                "type": "",
                "value": ""
              }
            ]
          },
          {
            "text": ["selected_county", " Census Tracts"],
            "condition": [
              {
                "id": "selected_county",
                "type": "",
                "value": ""
              }
            ]
          }
        ]
      ]
    }
  },
  "select": {
    "selected_variable": {
      "category": "variable_type"
    }
  },
  "tables": {
    "table10": {
      "paging": false,
      "scrollY": 400,
      "scrollX": 500,
      "scrollCollapse": true,
      "rowGroup": {
        "dataSrc": "features.name"
      },
      "columnDefs": [
        {
          "targets": "features.name",
          "visible": false
        }
      ],
      "buttons": ["copy", "csv", "excel", "print"],
      "dom": "<'row't><'row'<'col'B><'col'f>>",
      "filters": {
        "category": "variable_type"
      },
      "wide": false,
      "single_variable": false
    },
    "table12": {
      "info": false,
      "paging": false,
      "searching": false,
      "scrollY": 500,
      "scrollX": 500,
      "scrollCollapse": true,
      "variables": "selected_variable",
      "wide": true,
      "single_variable": true
    }
  },
  "plots": {
    "plot0": {
      "layout": {
        "margin": {
          "b": 40,
          "l": 60,
          "t": 25,
          "r": 10
        },
        "xaxis": {
          "domain": [0, 1],
          "automargin": true,
          "title": false,
          "fixedrange": true
        },
        "yaxis": {
          "domain": [0, 1],
          "automargin": true,
          "fixedrange": true,
          "zeroline": false
        },
        "hovermode": "closest",
        "showlegend": false
      },
      "config": {
        "modeBarButtonsToAdd": ["hoverclosest", "hovercompare"],
        "showSendToCloud": false,
        "responsive": true,
        "showTips": false,
        "displaylogo": false,
        "modeBarButtonsToRemove": ["select2d", "lasso2d", "sendDataToCloud"]
      },
      "data": [
        {
          "hoverinfo": "text",
          "mode": "lines+markers",
          "showlegend": false,
          "type": "scatter",
          "marker": {
            "color": "rgba(31,119,180,1)",
            "line": {
              "color": "rgba(31,119,180,1)"
            }
          },
          "error_y": {
            "color": "rgba(31,119,180,1)"
          },
          "error_x": {
            "color": "rgba(31,119,180,1)"
          },
          "line": {
            "color": "rgba(31,119,180,1)"
          },
          "xaxis": "x",
          "yaxis": "y"
        },
        {
          "type": "box",
          "marker": {
            "color": "rgba(255,127,14,1)",
            "line": {
              "color": "rgba(255,127,14,1)"
            }
          },
          "error_y": {},
          "error_x": {},
          "line": {
            "color": "#d6d6d6"
          },
          "xaxis": "x",
          "yaxis": "y",
          "fillcolor": "transparent",
          "name": "Box Plot"
        }
      ],
      "subto": [
        "map0"
      ]
    }
  },
  "maps": {
    "map0": {
      "shapes": {
        "district": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/district.geojson",
        "county": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/county.geojson",
        "tract": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/tract.geojson"
      },
      "options": {
        "attributionControl": false,
        "scrollWheelZoom": false,
        "center": [38, -79.5],
        "zoom": 7,
        "legend": true,
        "subto": [
          "plot0"
        ]
      },
      "tiles": {
        "url": "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
      }
    }
  },
  "variables": [
    {
      "id": "shapes",
      "states": [
        {
          "condition": [
            {
              "id": "selected_district",
              "type": "",
              "value": ""
            },
            {
              "id": "selected_county",
              "type": "!",
              "value": ""
            }
          ],
          "value": "county"
        },
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": ""
            }
          ],
          "value": "tract"
        }
      ],
      "default": "district"
    },
    {
      "id": "region_select",
      "states": [
        {
          "condition": [
            {
              "id": "shapes",
              "type": "=",
              "value": "county"
            }
          ],
          "value": "selected_county"
        }
      ],
      "default": "selected_district"
    },
    {
      "id": "selected_region",
      "states": [
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": ""
            }
          ],
          "value": "selected_county"
        }
      ],
      "default": "selected_district"
    }
  ]
}