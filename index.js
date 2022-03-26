const util = require('./util.js');
/**
 * fitler hexo's post, auto generate `abbrlink`
 *
 * @param log
 * @param data
 */
function filterPost(log, data) {
    if (!data.abbrlink) {
        data.abbrlink = util.getNewNameBase64(data.title);
        log.i("Generate abbrlink [%s] for post [%s]", data.abbrlink, data.source);
    }
}
hexo.extend.filter.register('before_post_render', function (data) {
    if (data.layout === 'post') {
        filterPost(this.log, data);
    }
    return data;
});