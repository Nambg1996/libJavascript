 
        var modulAjax = {
            urls: function(href) {
                return {
                    datas: function(objs) {

                        $.ajax({
                            url: href,
                            type: 'post',
                            async: false,
                            data: obj,
                            success: function(responsed) {
                                res = responsed
                            },
                            error: function(responsed) {
                                alert('Error');
                            }
                        });

                        return res
                    }
                }
            }
        }

/* how to use ajax 

        obj = {
            ch_room: "TC",
            value_humi: 14,
            value_temp: 4
        }
        z = modulAjax.urls("getNowtemandHulmi.php").datas(obj)

        console.log(z)

*/