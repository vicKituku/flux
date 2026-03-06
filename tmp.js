const project_id = 'fgqmojaj';
const dataset = 'production';
const api_version = '2025-03-16';
const url = `https://${project_id}.api.sanity.io/v${api_version}/data/query/${dataset}?query=*[_type == "post"]`;

fetch(url)
    .then(r => r.json())
    .then(data => data.result.forEach(p => {
        if (!p.image) console.log('MISSING IMAGE:', p.title);
        else console.log('HAS IMAGE:', p.title);
    }))
    .catch(console.error);
