
const testAPP = {
    data () {
      return {
        info: 0,
        curr_url: -1,
      }
    },
    mounted () {
      var that = this;
      this.info = [1,2,3];
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        that.curr_url = tabs[0].url;
        console.log(that.curr_url);

        axios.get(that.curr_url.split("/lab")[0] + '/api/kernelspecs',{
            //   param:{
            //     id:1
            //   }
            })
            .then(response => {
            this.info = response;
            console.log(response);
            })
            .catch(function (error) { // 请求失败处理
            console.log(error);
        });

    });

    

    }
  };

Vue.createApp(testAPP).mount('#app');