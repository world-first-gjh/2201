

//获取商品信息
class List {
    constructor() {
        this.getData();
    }
    async getData() {
        let { data, status } = await axios.get('http://localhost:8888/goods/list?current=1&pagesize=150')
        // console.log(data,status);
        if (status == 200) {
            // console.log(data);
            let html = '';
            data.list.forEach(goods => {
                // console.log(goods);
                html += `<div class="shop">
                <img src="${goods.img_big_logo}" alt="">
                <p class="spp"><a>${goods.title}</a></p>
                <span class="spsp">￥${goods.price}</span>
                <strong><a>找相似</a></strong>
            </div>`;
            });
            this.$('.center').innerHTML = html;
        }

    }
    $(tag) {
        let res = document.querySelectorAll(tag)
        return res.length == 1 ? res[0] : res;
    }
}
new List;
