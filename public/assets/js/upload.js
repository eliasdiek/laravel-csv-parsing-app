$(document).ready(function () {
    var del_item = [];
    var m = 0;
    var file_count = 0;
    var file_count1 = 0;
    var _base_url = $("#_base_url").val();

    $("#upload-btn").addClass('btn-disable');
    $("#upload-btn").addClass('dark-red');

    $("#cancelAll-btn").addClass('btn-disable');
    $("#cancelAll-btn").addClass('dark-danger');

    var file = document.getElementById('resumable-browse');
    $('#resumable-browse').change(function () {
        $("#upload-btn").removeClass('btn-disable');
        $("#upload-btn").removeClass('dark-red');

        $("#cancelAll-btn").removeClass('btn-disable');
        $("#cancelAll-btn").removeClass('dark-danger')
    

        $('#progess').removeClass('hide');
        $('#resumable-drop').addClass('hide');
        file_count1 = this.files.length;
        for (var i = 0; i < this.files.length; i++) { //Progress bar and status label's for each file genarate dynamically
            let ext = getExtension(this.files[i].name);

            if( ext == 'csv' || ext =='CSV' ) {
                var fileId = i;
                let filesize;

                if(this.files[i].size < 1024) {
                    filesize = this.files[i].size + ' bytes';
                }
                else {
                    filesize = parseFloat((this.files[i].size/1048576).toFixed(2))+' MB';
                }

                $("#progess").append('<div class="mb20 f_progress" id="progressbar_'+fileId+
                '"><div class="row mb20"><div class="col-md-1 col-sm-1 col-xs-1 text-center"><i class="fas fa-file" style="margin-top: 20px;"></i></div><div class="col-md-9 col-sm-9 col-xs-9"><p class="text-left"><b class="file-name">'+
                this.files[i].name+'</b></p><div class="text-left"><span class="process-size">0 bytes </span><span class="file-size"> / '+
                filesize+'</span></div><div class="myProgress"><div class="bar myBar"></div></div></div><div class="col-md-2 col-sm-2 col-xs-1"><span class="f_close" title="'+fileId+'" id="f_close_'+fileId+'">&times;</span></div></div></div>');
                $('#progressbar_'+fileId).click(function() {

                })
                $("#f_close_"+fileId).click(function (){
                    $('#progressbar_'+$(this).attr('title')).remove();
                    del_item.push($(this).attr('title'));

                    file_count1--;

                    if(file_count1 == 0) {
                        $('#resumable-drop').removeClass('hide');
                        $('#resumable-drop').show();
            
                        $("#resumable-browse").val('');
            
                        $(".upload-btn-text").show();
                        $("#uploading-spinner").addClass('hide');
            
                        $("#cancelAll-btn").addClass('btn-disable');
                        $("#cancelAll-btn").addClass('dark-danger');
            
                        $("#upload-btn").addClass('btn-disable');
                        $("#upload-btn").addClass('dark-red');
                        $("#upload-btn").removeClass('hide');
                        $("#tostep2-btn").addClass('hide');
                    }
                });
            }
            else {
                $("#warning-alert span").text(this.files[i].name+' is not csv file!');
                $("#warning-alert").removeClass('hide');
                $("#warning-alert").show();
                if(this.files.length = 1) {
                    $('#resumable-drop').removeClass('hide');
                    $("#resumable-browse").val('');
                }
                setTimeout(function() {
                    $("#warning-alert").fadeOut();
                },2000);
            }
        }
        
    })

    $("#upload-btn").click(function() {
        m = 0
        if(!$(this).hasClass('btn-disable')) {
            $(".upload-btn-text").hide();
            $("#uploading-spinner").removeClass('hide');
            $(this).addClass('btn-disable');
            $(this).addClass('dark-red');

            $("#cancelAll-btn").addClass('btn-disable');
            $("#cancelAll-btn").addClass('dark-danger');

            uploadFiles();
        }
    })
    $("#cancelAll-btn").click(function() {
        if(!$(this).hasClass('btn-disable')) {
            $(this).addClass('btn-disable');
            $(this).addClass('dark-danger');

            $('#resumable-drop').removeClass('hide');
            $('#progess').html('');
            $("#resumable-browse").val('');
            $('#resumable-drop').removeClass('hide');
            $('#resumable-drop').show();

            $(".upload-btn-text").show();
            $("#uploading-spinner").addClass('hide');

            $("#upload-btn").addClass('btn-disable');
            $("#upload-btn").removeClass('hide');
            $("#tostep2-btn").addClass('hide');
        }
    })

    function uploadFiles() {
        
        if(del_item.length > 0) {
            for (var i = 0; i < file.files.length; i++) {
                for(var j = 0; j<del_item.length; j++) {
                    if(i!=del_item[j]) {
                        uploadSingleFile(file.files[i], i);
                    }
                }
            }
        }
        else {
            for (var i = 0; i < file.files.length; i++) {
                if(i!=del_item[j]) {
                    uploadSingleFile(file.files[i], i);
                }
            }
        }
        file_count = file.files.length - del_item.length;

    }

    function uploadSingleFile(file, i) {
        var fileId = i;
        var ajax = new XMLHttpRequest();
        //Progress Listener
        ajax.upload.addEventListener("progress", function (e) {
            var percent = (e.loaded / e.total) * 100;
            $('#progressbar_' + fileId + ' .myBar').css("width", percent + "%");

            var process_size;
            if(e.loaded < 1024) {
                process_size = file.size + ' bytes';
            }
            else {
                process_size = (e.loaded / 1048576).toFixed(2) + ' MB';
            }
            $('#progressbar_' + fileId + ' .process-size').text(process_size);
           
            
        }, false);
        //Load Listener
        
        ajax.addEventListener("load", function (e) {
            m ++;
            $('#progressbar_' + fileId).css("width", "100%");

            let origin_header = new Array();
            origin_header = JSON.parse(e.target.response);

            if(origin_header.error == 'none') {
                let header = ['ADDRESS','CITY','PROVINCE','POSTALCODE'];
                let _added_elem = '';
    
                for(let i=0; i<header.length; i++) {
                    _added_elem += '<div class="col-md-3 col-xs-12 text-left"><label class="header_label">'+
                    header[i]+': <span class="required_mark">*</span></label><select class="cus_sel_box '+header[i]
                    +'" name=""><option value=""></option>';
                    for(let j=0; j<origin_header.header.length; j++) {
                        _added_elem += '<option value="'+origin_header.header[j]+'">'+
                        origin_header.header[j]+'</option>';
                    }
                    _added_elem += '</select></div>';
                }
                let whole_added_elem = '<div class="custom-select" id="selected_'+fileId
                +'"><p class="text-center mytext-dark-blue">Please confirm this 1st row contains HEADER information like ADDRESS, CITY, PROVINCE, POSTAL CODE.</p><p class="text-center mytext-dark-blue mb20">If file does not contain header information, process will fail.</p><div class="row">'+_added_elem+'</div><p class="alert_header" style="display:none; color: #981a36;">Select the above select boxs!</p></div>';
                $('#resumable-drop').hide();
                $("#progressbar_"+fileId).append(whole_added_elem);
                
                if( m == file_count ) {
                    $("#upload-btn").addClass('hide');
                    $("#tostep2-btn").removeClass('hide');
    
                    $("#cancelAll-btn").removeClass('btn-disable');
                    $("#cancelAll-btn").removeClass('dark-danger');
                }
            }
            else {
                let _added_elem_error = '<div class="row"><div class="col-md-12"><p class="text-center text-danger">'+origin_header.error+'</p></div></div>';
                $("#progressbar_"+fileId).append(_added_elem_error);
                $("#progressbar_"+fileId+" .myBar").css('background-color','#981a36');
                
                if( m == file_count ) {
                    $("#upload-btn").addClass('hide');
    
                    $("#cancelAll-btn").removeClass('btn-disable');
                    $("#cancelAll-btn").removeClass('dark-danger');
                    file_count--;
                }
            }

        }, false);
        //Error Listener
        ajax.addEventListener("error", function (e) {
            $("#status_" + fileId).text("Upload Failed");
        }, false);
        //Abort Listener
        ajax.addEventListener("abort", function (e) {
            $("#status_" + fileId).text("Upload Aborted");
        }, false);

        ajax.open("POST", "file_upload", 'json'); // Your API .net, php

        var uploaderForm = new FormData();
        var _token = $('input[name=_token]').val();
        uploaderForm.append("file", file);
        uploaderForm.append("_token", _token);
        ajax.send(uploaderForm);
        
        //Cancel button
        var _cancel = $('#f_close_' + fileId);
        // _cancel.show();

        _cancel.on('click', function () {
            file_count--;

            if(file_count == 0) {
                $('#resumable-drop').removeClass('hide');
                $('#resumable-drop').show();

                $("#resumable-browse").val('');

                $(".upload-btn-text").show();
                $("#uploading-spinner").addClass('hide');
    
                $("#cancelAll-btn").addClass('btn-disable');
                $("#cancelAll-btn").addClass('dark-danger');

                $("#upload-btn").addClass('btn-disable');
                $("#upload-btn").addClass('dark-red');
                $("#upload-btn").removeClass('hide');
                $("#tostep2-btn").addClass('hide');
            }
            $("progressbar_"+fileId).hide();
        })
    }

    $("#tostep2-btn").click(function() {

        $('.alert_header').hide();
        let validation = false;
        $('.cus_sel_box').each(function() {
            if($(this).val() == "") {
                this.focus();
                validation = true;
                $(this).parent().parent().parent().find('.alert_header').show();
            }
        })

        if(!validation) {
            $(".continue-btn-text").hide();
            $("#tostep2-spinner").removeClass('hide');

            var file_count = file.files.length - del_item.length;
            var header_info = {};
            var _token = $("input[name=_token]").val();
            for(var k=0; k<file_count; k++) {
                header_info[k] = {};
                header_info[k]['filename'] = $("#selected_"+k).parent().find('.file-name').text();
                header_info[k]['address'] = $("#selected_"+k+" .ADDRESS").val();
                header_info[k]['city'] = $("#selected_"+k+" .CITY").val();
                header_info[k]['province'] = $("#selected_"+k+" .PROVINCE").val();
                header_info[k]['postalcode'] = $("#selected_"+k+" .POSTALCODE").val();
            }
            
            $.ajax({
                url: 'set_header',
                type: 'post',
                data: {'header_info':header_info,'_token':_token},
                success: function(msg) {
                    if(msg=="success") {
                        window.location = 'main_process';
                    }
                }
            })
        }

    });

    if($("#_page").val() == 'main_process') {
        get_file_info();
    };

    $("#process-cancel-btn").click(function() {
        $('#get-contact-info').addClass('hide');
        $("#dbStore-spinner").show();
        $.ajax({
            url: '/process_cancel',
            type: 'get',
            success: function(msg) {
                if(msg == 'success') {
                    window.location = '/working_area';
                }
            }
        });
    });

    $("#process-form").submit(function(e) {
        e.preventDefault();
        $('#exceeded-alert').hide();
        $("#dbStore-spinner").show();
        $('#get-contact-info').addClass('hide');
        $("#processing").removeClass('hide');

        do_process();
    })

    function do_process() {
        let modal_show = true;
        let number_of_files = parseInt($('.number_files').text());
        let process_info = {};
        let _token = $("input[name=_token]").val();
        let total_process_count = 0;
        let process_duration = 0;
        for(let i=0; i<number_of_files; i++) {
            process_info[i] = {};
            process_info[i]['filename'] = $("#rows_to_process_"+i+"_filename").val();
            process_info[i]['process_count'] = $("#rows_to_process_"+i).val();
            total_process_count += process_info[i]['process_count'];
            process_info[i]['dataset'] = $("#dataset_"+i).val();
        }
        process_duration = (total_process_count*0.65)/60;
        
        if(process_duration < 1) {
            process_duration = 1;
        }
        else {
            process_duration++;
        }

        setTimeout(function() {
            if(modal_show) {
                $('#process-modal #mins').text(process_duration.toFixed());
                $("#process-modal").modal({backdrop: "static"});
            }
        },3000);

        $.ajax({
            url: 'processor',
            type: 'post',
            dataType: 'json',
            data: {'process_info':process_info,'_token':_token},
            success: function(msg) {
                if(msg == 'exceeded_requests') {
                    modal_show = false;
                    $("#dbStore-spinner").hide();
                    $('#get-contact-info').removeClass('hide');
                    $("#processing").addClass('hide');
                    $('#exceeded-alert').show();
                    $('#rows_to_process_0').focus();
                }
                else {
                    $("#process-modal").modal('hide');
                    $("#processing").hide();
                    $("#completed").removeClass('hide');
                    $("#dbStore-spinner").hide();
    
                    for(let i=0; i < msg.length; i++) {
                        $("#completed_list").append('<a href="#" class="btn btn-primary download-btn other-download-btn" onclick="event.preventDefault();document.getElementById(\'download-form-'+msg[i].id+'\').submit();">'+msg[i].filename+' download</a>'+
                        '<form method="POST" id="download-form-'+msg[i].id+'" action="'+_base_url+'/download" style="display:none;"><input type="hidden" name="_token" value="'+_token+
                        '" /><input type="text" name="_download_token" value="'+msg[i].table_name+'" /></form>');
                    }
                }
            }
        });
    }

    function test() {
        $("#dbStore-spinner").hide();
        $.ajax({
            url: 'test',
            type: 'get',
            dataType: 'json',
            success: function(msg) {
                for(let i=0; i < msg.length; i++) {
                    $("#completed_list").append('<a href="'+_base_url+'/download/'+msg[i].table_name+'" target="_blank" type="button" class="btn btn-lg btn-primary btn-block signup-btn mb20">'+msg[i].filename+'</a>');
                }
            }
        });
    }

    function get_file_info() {
        let appended_elem = $('#file_info');
    
        $.ajax({
            url: '/get_file_info',
            type: 'get',
            success: function(data) {
                let total_count = 0;
                let processable = 0;
                for(let i = 0; i <( data.length -2 ); i++) {
                    let append_str = '<h4 class="mytext-dark-blue underline text-left">'+(i+1)+'. '+data[i].fileName
                    +' :</h4><div class="form-group text-left"><label for="total_rows">Total rows:</label><input type="number" name="total_rows" id="total_rows_'+i
                    +'" class="form-control" value="'+data[i].count+'" placeholder="Total rows" disabled></div><div class="form-group text-left"><label for="rows-to-process">Number of rows to process:</label><input type="number" class="form-control process-number-input" id="rows_to_process_'+i+'" value="'+
                    data[i].count+'" min="1" max="'+data[i].count+'" placeholder="Number of rows to process" reqired><input type="hidden" class="filename" id="rows_to_process_'+i+'_filename" value="'+
                    data[i].fileName+'"></div><div class="form-group text-left" style="margin-bottom: 68px"><label>Select a dataset:</label><select name="dataset" class="form-control" id="dataset_'+i+'" required><option value=""></option></select></div>';
                    appended_elem.append(append_str);

                    dataset = data[data.length-2];
                    for(let j = 0; j < dataset.length; j++) {
                        $("#dataset_"+i).append('<option value="'+dataset[j].id+'">'+dataset[j].name+'</option>')
                    }

                    total_count += data[i].count;
                
                    $("#rows_to_process_"+i).change(function() {
                        let total_numbers = 0;
                        $('.process-number-input').each(function() {
                            total_numbers += parseInt($(this).val());
                        })
                        $('.total_rows').text(total_numbers);
                    });

                    $("#rows_to_process_"+i).keypress(function() {
                        let total_numbers = 0;
                        $('.process-number-input').each(function() {
                            total_numbers += parseInt($(this).val());
                        })
                        $('.total_rows').text(total_numbers);
                    })
                }
                processable = data[data.length-1];
    
                $('.number_files').text((data.length -2));
                $('.total_rows').text(total_count);
                $('.processable').text(processable);
                $("#dbStore-spinner").hide();
                $('#get-contact-info').removeClass('hide');
            }
        })
    }

})

function getExtension(path) {
    var basename = path.split(/[\\/]/).pop(),
        pos = basename.lastIndexOf(".");

    if (basename === "" || pos < 1)
        return "";

    return basename.slice(pos + 1);
}

