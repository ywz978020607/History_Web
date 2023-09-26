
const testAPP = {
    data () {
      return {

        seen_id: 0,
        detail_key: '',
        info: {},
        key_num: [],
      }
    },
    mounted () {
      this.start();
    },
    computed:{
      sorted_info(){
        return list(this.info).sort(function (a,b){
          return a.length - b.length;
        })
      }
    },
    methods: {
      start(){
        var that = this;
        that.seen_id = 0;
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
          var curr_url = tabs[0].url;
          axios.get(curr_url.split("/lab")[0] + '/api/sessions',{
              //   param:{
              //     id:1
              //   }
              })
              .then(response => {
              // console.log(response.data);
              that.deal_session(response.data);
              })
              .catch(function (error) { // 请求失败处理
              console.log(error);
            });
          }
        );
      },
      deal_session(input_data){
        var that = this;
        that.info = {};
        for(var ii=0;ii<input_data.length;ii++){
          // console.log(input_data[ii]);
          if('notebook' in input_data[ii]){
            person_name = input_data[ii]['notebook']['path'].split("/")[0];
            file_path = input_data[ii]['notebook']['path'];
            file_name = input_data[ii]['name'];
            last_time = input_data[ii]['kernel']['last_activity'];
            // last_time = last_time.replace("T", " ").split(".")[0];
            var timestamp = Date.parse(new Date(last_time));
            last_time = new Date(timestamp).toLocaleString();
            connect_num = input_data[ii]['kernel']['connections'];
            idle_state = input_data[ii]['kernel']['execution_state'];
            kernel_info = input_data[ii]['kernel'];
            // 
            if(!(person_name in that.info)){
              that.info[person_name] = [[file_name, file_path, last_time, connect_num, idle_state, kernel_info],];
            }
            else{
              that.info[person_name][that.info[person_name].length] = [file_name, file_path, last_time, connect_num, idle_state, kernel_info]
            }
          }
        }
        // sortedByValue = Object.keys(that.info).sort(function(a,b){
        //   return that.info[b].length - that.info[a].length;
        // });
      },

    }
  };

Vue.createApp(testAPP).mount('#app');