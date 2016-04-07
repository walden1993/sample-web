module.exports = function (grunt) {
  // ��Ŀ����
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
				livereload: '<%=connect.options.livereload%>'//����ǰ�������Ķ˿�  35729
			},
			files: [  //�����ļ��ĸı�ͻ�ʵʱˢ����ҳ
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
			hostname: '*', //Ĭ�Ͼ������ֵ��������Ϊ����ĳ�� IP��localhost ������
			livereload: 35729  //������ watch �����Ķ˿�
		  },
	  server: {
		options: {
		  open: true, //�Զ�����ҳ http://
		  base: ['www'  //��Ŀ¼
		  ],
		  index:'index.html'//Ĭ�ϴ�ҳ��
		}
	  }
	}
  });
  

  // �����ṩ"uglify"����Ĳ��
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //����jshint�Զ����Բ��
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //�Զ�������watch���
  grunt.loadNpmTasks('grunt-contrib-watch');
  //web����
  grunt.loadNpmTasks('grunt-contrib-connect')
  // Ĭ������
  grunt.registerTask('default', ['uglify','connect','watch']);
  
  
  
}
