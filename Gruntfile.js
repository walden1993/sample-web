module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
	  my_target: {
		  files: [{
			  expand: true,
			  cwd: 'src/',
			  src: '**/*.js',
			  dest: 'dest/'
		  }]
		}
    },
	jshint:{
		build:['Gruntfile.js','src/*.js'],
		options:{
			reporter: require('jshint-stylish'),
			jshintrc: '.jshintrc'
		}
	},
	watch:{
		build:{
			tasks:['jshint','uglify'],
			options:{
				spawn:false,
				livereload: '<%=connect.options.livereload%>'//监听前面声明的端口  35729
			},
			files: [  //下面文件的改变就会实时刷新网页
			  'www/*.html',
			  'www/style/{,*/}*.css',
			  'www/js/{,*/}*.js',
			  'www/images/{,*/}*.{png,jpg}'
			]
		}
		
	},
	connect: {
	  options: {
			port: 9000,
			hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
			livereload: 35729  //声明给 watch 监听的端口
		  },
	  server: {
		options: {
		  open: true, //自动打开网页 http://
		  base: ['www'  //主目录
		  ],
		  index:'index.html'//默认打开页面
		}
	  }
	}
  });
  

  // 加载提供"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //加载jshint自动测试插件
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //自动化监听watch插件
  grunt.loadNpmTasks('grunt-contrib-watch');
  //web服务
  grunt.loadNpmTasks('grunt-contrib-connect')
  // 默认任务
  grunt.registerTask('default', ['uglify','connect','watch']);
  
  
  
}
