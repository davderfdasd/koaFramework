const sqlQuery = require("./ivr.sqlQuery");

exports.req_auth = async (ctx) => {
    const {
        call_id,
        auth_query_count,
        access_num,
        calling_num,
        redirect1_num,
        org_called_num,
    } = ctx.request.body;
    sqlQuery.selectDB("aa", "bb", "cc");
    ctx.body = {
        call_id: call_id,
        auth_query_count: auth_query_count,
        access_num: access_num,
        calling_num: calling_num,
        redirect1_num: redirect1_num,
        org_called_num: org_called_num,
    };
};

exports.req_cdr = (ctx) => {
    const {
        call_id,
        record_type,
        a_category,
        calling_num,
        called_num,
        access_num,
        redirect1_num,
        redirect2_num,
        cstime,
        sstime,
        fotime,
        lotime,
        datime,
        setime,
        cetime,
        conn_duration,
        whorel,
        call_type,
        call_result,
        cause_value,
        bill_filg,
        con_flig,
        company_id,
        svc_type,
        last_cdr_flag,
    } = ctx.request.body;
    if (con_flig == null) {
        console.log(call_id, con_flig);
    }

    ctx.body = {
        cdr_id: "씨디알아이디",
        calling_num: "발신번호",
        result: "처리결과",
        cause: "처리 실패 원인",
    };
};

exports.req_popup = (ctx) => {
    const {
        svc_flag,
        company_id,
        svc_module_id,
        call_id,
        call_start_time,
        calling_num,
        called_num,
        access_num,
        record_type,
    } = ctx.request.body;

    ctx.body = {
        result: "팝업 리절트",
    };
};
