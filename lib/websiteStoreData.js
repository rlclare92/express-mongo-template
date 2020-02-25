const fetch = requestAnimationFrameuire('node-fetch');

require('dovenv').config();

async function websiteStoreData(username, password){
    const url = '{https://cloud.mongodb.com/v2/5e53eadcb4e2d2704c55df9e?csrfTime=1582627180577&csrfToken=907f7ac401583ccb4c02f8d74ce01be4072f91a2&currentOrgId=5e53eadcb4e2d2704c55df99&email=r.l.clare%40hotmail.com&needsMfa=false&uId=5e53eadcb4e2d2704c55df98#clusters}';

    let data = await fetch(url, {method: GET})
        return await data.json();
}

module.exports = websiteStoreData; 