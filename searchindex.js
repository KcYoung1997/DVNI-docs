Search.setIndex({docnames:["api/container.base","api/container.dhcpd","api/container.kali","api/container.nginx","api/container.vsftpd","api/scenarios.ArpPoisioning","api/scenarios.CAMFlooding","api/scenarios.DHCPIntro","api/scenarios.DHCPStarvation","api/scenarios.HostScanning","api/scenarios.PacketSniffing","api/scenarios.PortScanning","api/scenarios.VlanDoubleTagging","api/scenarios.VlanTrunking","api/start","api/utils.account","api/utils.arp","api/utils.document","api/utils.network","api/utils.stp","api/utils.subnet","api/utils.vlan","containers","controller","index","scenarios","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:54},filenames:["api/container.base.rst","api/container.dhcpd.rst","api/container.kali.rst","api/container.nginx.rst","api/container.vsftpd.rst","api/scenarios.ArpPoisioning.rst","api/scenarios.CAMFlooding.rst","api/scenarios.DHCPIntro.rst","api/scenarios.DHCPStarvation.rst","api/scenarios.HostScanning.rst","api/scenarios.PacketSniffing.rst","api/scenarios.PortScanning.rst","api/scenarios.VlanDoubleTagging.rst","api/scenarios.VlanTrunking.rst","api/start.rst","api/utils.account.rst","api/utils.arp.rst","api/utils.document.rst","api/utils.network.rst","api/utils.stp.rst","api/utils.subnet.rst","api/utils.vlan.rst","containers.rst","controller.rst","index.rst","scenarios.rst","utils.rst"],objects:{"":{container:[22,0,0,"-"],controller:[23,0,0,"-"],scenarios:[25,0,0,"-"],start:[14,0,0,"-"]},"container.Docker":{added:[22,2,1,""],build:[22,3,1,""],built:[22,2,1,""],client:[22,2,1,""],document:[22,3,1,""]},"container.base":{Base:[0,1,1,""]},"container.dhcpd":{Dhcpd:[1,1,1,""],example:[1,4,1,""],globals:[1,1,1,""],options:[1,1,1,""]},"container.dhcpd.Dhcpd":{add_global:[1,3,1,""],add_subnet:[1,3,1,""],conf:[1,2,1,""],config:[1,3,1,""],document:[1,3,1,""]},"container.dhcpd.globals":{authoritative:[1,5,1,""],default_lease_time:[1,5,1,""],local_address:[1,5,1,""],local_port:[1,5,1,""],max_lease_time:[1,5,1,""],min_lease_time:[1,5,1,""]},"container.dhcpd.options":{List:[1,1,1,""],Tuple:[1,1,1,""],broadcast_address:[1,5,1,""],cookie_servers:[1,5,1,""],domain_name:[1,5,1,""],domain_name_servers:[1,5,1,""],log_servers:[1,5,1,""],ntp_servers:[1,5,1,""],router_discovery:[1,5,1,""],routers:[1,5,1,""],static_routes:[1,5,1,""],subnet_mask:[1,5,1,""],time_servers:[1,5,1,""]},"container.kali":{Kali:[2,1,1,""],example:[2,4,1,""]},"container.kali.Kali":{add_hint:[2,3,1,""],config:[2,3,1,""],install_package:[2,3,1,""],packages_to_install:[2,2,1,""],started:[2,2,1,""]},"container.nginx":{Nginx:[3,1,1,""]},"container.vsftpd":{Vsftpd:[4,1,1,""],example:[4,4,1,""]},"container.vsftpd.Vsftpd":{config:[4,3,1,""]},"controller.PoxController":{copyScript:[23,5,1,""],pox_comand:[23,2,1,""],pox_directory:[23,2,1,""]},"scenarios.ArpPoisioning":{Import:[5,1,1,""]},"scenarios.ArpPoisioning.Import":{add_switch:[5,3,1,""],create_network:[5,3,1,""],enabled:[5,2,1,""],generate_task:[5,3,1,""],name:[5,2,1,""],run_network:[5,3,1,""],weight:[5,2,1,""]},"scenarios.CAMFlooding":{Import:[6,1,1,""]},"scenarios.CAMFlooding.Import":{add_controller:[6,3,1,""],create_network:[6,3,1,""],enabled:[6,2,1,""],generate_task:[6,3,1,""],name:[6,2,1,""],run_network:[6,3,1,""],weight:[6,2,1,""]},"scenarios.DHCPIntro":{Import:[7,1,1,""]},"scenarios.DHCPIntro.Import":{create_network:[7,3,1,""],dhcpd:[7,2,1,""],enabled:[7,2,1,""],generate_questions:[7,3,1,""],generate_task:[7,3,1,""],ips:[7,2,1,""],kali:[7,2,1,""],name:[7,2,1,""],network:[7,2,1,""],weight:[7,2,1,""]},"scenarios.DHCPStarvation":{Import:[8,1,1,""]},"scenarios.DHCPStarvation.Import":{create_network:[8,3,1,""],enabled:[8,2,1,""],generate_questions:[8,3,1,""],generate_task:[8,3,1,""],name:[8,2,1,""],weight:[8,2,1,""]},"scenarios.HostScanning":{Import:[9,1,1,""]},"scenarios.HostScanning.Import":{create_network:[9,3,1,""],enabled:[9,2,1,""],generate_questions:[9,3,1,""],generate_task:[9,3,1,""],kali:[9,2,1,""],name:[9,2,1,""],prefixlen:[9,2,1,""],run_network:[9,3,1,""],subnet:[9,2,1,""],weight:[9,2,1,""]},"scenarios.PacketSniffing":{Import:[10,1,1,""]},"scenarios.PacketSniffing.Import":{"switch":[10,2,1,""],add_ftp:[10,3,1,""],add_switch:[10,3,1,""],connection_wait:[10,2,1,""],create_network:[10,3,1,""],enabled:[10,2,1,""],ftp_clients:[10,2,1,""],ftpd:[10,2,1,""],generate_questions:[10,3,1,""],generate_task:[10,3,1,""],kali:[10,2,1,""],name:[10,2,1,""],packages:[10,2,1,""],pw:[10,2,1,""],run_network:[10,3,1,""],user:[10,2,1,""],weight:[10,2,1,""]},"scenarios.PortScanning":{Import:[11,1,1,""],top_100_ports:[11,6,1,""]},"scenarios.PortScanning.Import":{enabled:[11,2,1,""],generate_questions:[11,3,1,""],name:[11,2,1,""],run_network:[11,3,1,""],weight:[11,2,1,""]},"scenarios.Scenario":{add_controller:[25,3,1,""],answer_document:[25,2,1,""],create_network:[25,3,1,""],enabled:[25,2,1,""],generate_questions:[25,3,1,""],generate_task:[25,3,1,""],name:[25,2,1,""],net:[25,2,1,""],questions:[25,2,1,""],run:[25,3,1,""],run_ftp:[25,3,1,""],run_network:[25,3,1,""],save_documents:[25,3,1,""],seed:[25,2,1,""],task_document:[25,2,1,""],weight:[25,2,1,""]},"scenarios.VlanDoubleTagging":{Import:[12,1,1,""]},"scenarios.VlanDoubleTagging.Import":{create_network:[12,3,1,""],enabled:[12,2,1,""],generate_questions:[12,3,1,""],generate_task:[12,3,1,""],kali_receive:[12,2,1,""],name:[12,2,1,""],receive_mode:[12,2,1,""],run_network:[12,3,1,""],weight:[12,2,1,""]},"scenarios.VlanTrunking":{Import:[13,1,1,""]},"scenarios.VlanTrunking.Import":{create_network:[13,3,1,""],enabled:[13,2,1,""],generate_questions:[13,3,1,""],generate_task:[13,3,1,""],hosts:[13,2,1,""],kali:[13,2,1,""],name:[13,2,1,""],run_network:[13,3,1,""],switches:[13,2,1,""],weight:[13,2,1,""]},"utils.account":{add_user:[15,4,1,""],change_password:[15,4,1,""],generate_password:[15,4,1,""]},"utils.arp":{net_static_arp:[16,4,1,""],static_arp:[16,4,1,""]},"utils.document":{add_hyperlink:[17,4,1,""],all_hosts:[17,4,1,""],docker_hosts:[17,4,1,""],subnet_table:[17,4,1,""],switch_graph:[17,4,1,""],writeAnswers:[17,4,1,""]},"utils.network":{add_switches:[18,4,1,""]},"utils.stp":{RstpSwitch:[19,1,1,""],wait_STP:[19,4,1,""]},"utils.stp.RstpSwitch":{bridgeOpts:[19,3,1,""]},"utils.subnet":{generate:[20,4,1,""],overlaps:[20,4,1,""]},"utils.vlan":{VlanMode:[21,1,1,""],VlanSwitch:[21,1,1,""],random_vlan:[21,4,1,""],random_vlans:[21,4,1,""],tag_intf:[21,4,1,""],trunk_intf:[21,4,1,""],vlan_mode_intf:[21,4,1,""],vlans:[21,6,1,""]},"utils.vlan.VlanMode":{ACCESS:[21,2,1,""],TAGGED:[21,2,1,""],TRUNK:[21,2,1,""],TUNNEL:[21,2,1,""],UNTAGGED:[21,2,1,""]},"utils.vlan.VlanSwitch":{addMode:[21,3,1,""],addTag:[21,3,1,""],addTrunk:[21,3,1,""],start:[21,3,1,""]},container:{Docker:[22,1,1,""],base:[0,0,0,"-"],dhcpd:[1,0,0,"-"],kali:[2,0,0,"-"],nginx:[3,0,0,"-"],vsftpd:[4,0,0,"-"]},controller:{PoxController:[23,1,1,""]},scenarios:{ArpPoisioning:[5,0,0,"-"],CAMFlooding:[6,0,0,"-"],DHCPIntro:[7,0,0,"-"],DHCPStarvation:[8,0,0,"-"],HostScanning:[9,0,0,"-"],PacketSniffing:[10,0,0,"-"],PortScanning:[11,0,0,"-"],Scenario:[25,1,1,""],VlanDoubleTagging:[12,0,0,"-"],VlanTrunking:[13,0,0,"-"]},start:{batch_scenario:[14,4,1,""],cleanup:[14,4,1,""],containers:[14,4,1,""],get_args:[14,4,1,""],get_scenarios:[14,4,1,""],main:[14,4,1,""],run_scenario:[14,4,1,""],test_scenarios:[14,4,1,""]},utils:{account:[15,0,0,"-"],arp:[16,0,0,"-"],document:[17,0,0,"-"],network:[18,0,0,"-"],stp:[19,0,0,"-"],subnet:[20,0,0,"-"],vlan:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:staticmethod","6":"py:data"},terms:{"0x7f8c1d698098":22,"0xffe":21,"0xfff":21,"1920x1080x24":2,"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,21,22,23,25],"enum":21,"float":1,"function":[1,9,17,18,19,21,24,25],"import":[5,6,7,8,9,10,11,12,13,25],"int":[1,2,20],"public":25,"return":[1,14,16,17,18,20,21,22],"static":[1,6,16,23],"switch":[5,6,8,9,10,13,18,19,23],"true":[5,6,9,10,11,12,13,14,19,20,25],"try":24,"var":23,Added:25,IDs:14,IPs:9,One:10,The:[2,6,17,18,21,22,23,24,25],Used:25,__init__:[9,25],about:[7,9,13],access:[9,13,21,24,25],account:[14,24,26],act:23,activ:13,adapt:9,add:[1,2,5,6,7,8,9,10,12,13,14,15,16,18,19,21,25],add_control:[6,25],add_ftp:10,add_glob:1,add_hint:2,add_hyperlink:17,add_subnet:1,add_switch:[5,10,18],add_us:15,added:[2,18,22,23],adding:[16,17],addmod:21,addr_rang:1,address:[1,6,7,20,24,26],addswitch:18,addtag:21,addtrunk:21,advantag:[12,13],after:24,against:[6,24],all:[1,5,10,13,14,25],all_host:17,allow:[9,14,23,24],alreadi:20,also:24,although:24,amount:[18,21],ani:[20,22,25],answer:[24,25],answer_docu:25,append:2,applic:[5,6,7,8,9,10,12,13,25],apt:2,arg:14,argument:[14,18],argv:14,arp:[6,16,24,25],arppois:[5,6],ask:[6,8,9,12,13],assign:1,attack:[6,8],authent:10,authorit:1,autom:22,avail:24,background:4,bandwidth:[6,8],base:[1,2,3,4,5,6,7,8,9,10,11,12,13,19,21,22,23,24,25],batch_scenario:14,befor:[2,25],being:[10,24],between:18,bind:2,bit:20,bool:[5,6,7,9,10,11,16,25],bridgeopt:19,broadcast_address:1,browser:24,build:22,built:22,cam:[24,25],cam_learn:6,camflood:6,can:[0,5,6,13,23,24,25],captur:10,caus:[6,8,14],chang:[1,15],change_password:15,charact:15,check:[9,14,20],choos:14,cidr:20,clean:14,cleanup:14,client:[10,22,24],com:[1,17],combin:25,command:[9,14],complet:[9,24],condigur:7,conf:[1,21],config:[1,2,4],configur:[1,19,24],connect:[2,5,6,7,8,9,10,12,13,24,25],connection_wait:10,contain:[0,1,2,3,4,6,7,8,9,14,15,17,18,24],containernet:[12,13,18,24,25],contin:[22,24],control:[5,6,7,8,9,10,12,13,21,24,25],cookie_serv:1,copi:[1,23],copyscript:23,correct:10,correspond:1,could:14,count:[9,18,21],creat:[1,2,4,9,12,13,18,24,25],create_network:[5,6,7,8,9,10,12,13,25],credenti:[5,6,10,24],cross:1,current:14,daemon:[1,22,24],damn:24,debian:0,default_lease_tim:1,defin:[14,24],denial:[6,8],detail:[5,6,7,8,9,10,12,13,25],determin:2,develop:[5,6,7,9,10,11,14,25],devic:[24,25],dhcp:[22,24,25],dhcpd:[1,7],dhcpintro:[7,8],dhcpstarvat:8,dhcpv4:1,dict:14,dictionari:14,dimag:22,directli:24,directori:[14,22],diretori:23,displai:[2,17],dist:21,doc:[1,2,5,6,7,8,9,10,12,13,17,21,22,24,25],docker:[0,1,2,3,4,9,14,15],docker_host:17,dockercli:22,dockerfil:22,dockerfilr:22,documen:[24,26],document:[1,2,7,8,17,18,22,25],docx:[7,8,17,25],domain_nam:1,domain_name_serv:1,dosn:[6,8],dot1q:21,doubl:[24,25],download:24,dvni:22,each:14,earlier:25,either:24,element:1,enabl:[5,6,7,8,9,10,11,12,13,14,19,25],entri:16,error:14,etc:1,ethic:24,everi:[14,16,25],exampl:[1,2,4,7,14,20,22],execut:25,extend:[1,2,4,5,6,7,8,9,10,12,13,21,25],extens:[21,25],extenst:19,fals:[5,6,7,8,9,10,11,14,23,25],file:[1,14,25],filenam:23,filter:14,find:[7,9,11,13],first:[21,24],flag:[19,23],flood:[5,8,10,24,25],folder:[23,24,25],follow:24,forc:[5,6],format:2,free:24,from:[1,9,14,16,20,21,22,24],ftp:[10,22,24,25],ftp_client:10,ftpd:10,gener:[5,6,7,9,10,11,14,15,20,21,24,25,26],generate_password:15,generate_quest:[7,8,9,10,11,12,13,25],generate_task:[5,6,7,8,9,10,12,13,25],get:14,get_arg:14,get_scenario:14,github:[17,18,24],given:[10,14,15,19,20,23,25],global:1,graph:18,graph_method:18,guidanc:24,hack:24,has:24,have:[24,25],header:[5,6,7,8,9,10,12,13,25],hexadecim:15,hint:2,hold:21,homogen:1,host:[2,5,10,11,13,14,16,20,24,25,26],host_count:[12,13],hosts_to:16,hostscan:[9,11,24],how:[1,2,5,6,7,8,9,10,12,13,25],html:[1,18,21,24],http:[1,17,18,21],hyperlink:17,imag:22,implement:[1,23,25],index:24,inform:[5,6,7,8,9,10,12,13,25],infrastructur:24,insid:[1,2,24],instal:2,install_packag:2,installact:23,instruct:14,interfac:[13,21],intf:21,introduc:7,ip_network:1,ipam:1,ipamworldwid:1,ips:7,ipv4network:[9,20],isc:[22,24],issu:17,issuecom:17,itertool:22,kali:[5,6,7,8,9,10,13,22,24],kali_rec:12,know:25,kwarg:[0,1,2,3,4,8,12,13,19,21,22,23],lan:[24,26],latest:22,layer:24,learn:19,length:[1,15,20],like:[5,6,7,9,10,11,25],line:14,link:[6,8,18],linux:[22,24],list:[1,2,11,14,16,18,21,25],local:25,local_address:1,local_port:1,locat:[23,25],log_serv:1,login:[5,6,14],look:[14,19],low:14,lower:[6,8,25],mac:6,machin:[2,24],made:1,mai:24,main:[14,25],make:[10,24],makefil:24,manag:[21,24,26],mark:2,mask:20,max_lease_tim:1,method:[1,25],min_lease_tim:1,mininet:[5,9,19,21,22,23,24,25,26],mode:21,modul:[14,24],most:24,mount:1,mutablesequ:1,name:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,21,22,23,25],nativ:21,neccesari:9,net:[17,18,25],net_static_arp:16,netcat:11,netmask:1,network:[1,5,6,7,8,9,10,11,12,13,24,25,26],networkx:18,nginx:[22,24],nmap:[9,11,13],node:[1,2,4,5,9,19,21,22,23,25],none:[1,5,6,7,8,9,10,11,12,13,15,20,21,25],note:1,novnc:[2,24],ntp_server:1,number:[5,6,7,9,10,11,21,25],object:[7,8,17,22,25],onc:24,one:[1,6,8,14,20],onlin:24,open:[11,21],openflow:[5,10,23],openvswitch:21,openxml:17,option:[1,2,19,24],option_list:1,order:[14,21,25],org:21,origin:21,other:[0,5,22,25],our:14,out:[9,24],over:24,overlap:20,overrid:9,ovs:21,ovsswitch:[19,21],packag:[2,10],packages_to_instal:2,packet:[5,6,7,24,25],packetsnif:[5,10],page:24,paragraph:17,param:1,paramet:[1,2,5,6,7,9,10,11,14,16,17,18,20,21,22,23,25],part:14,pass:[18,23,25],password:15,path_graph:18,per:[1,25],perform:[5,6,8,9,13,19,25],place:17,poision:[5,6],poison:[24,25],port:[1,2,5,10,13,21,24,25],portscan:11,pox:[6,23],pox_comand:23,pox_directori:23,poxcontrol:[6,23],practic:24,prefixlen:[9,12,13],present:25,print:14,prioriti:14,privat:20,produc:25,product:1,project:24,projectroot:14,protocol:[24,26],provid:[5,6,7,8,9,10,11,12,13,14,16,24,25],purpos:14,pyftplib:25,python:[17,24,25],question:[1,13,25],random:[5,6,7,9,10,11,14,21,25],random_vlan:21,randomis:25,rang:[1,9,20],rapid:19,rather:1,readthedoc:24,receive_mod:12,reduc:14,refer:18,relev:7,remot:2,replac:[6,8],report:8,request:21,requir:[5,7,10,11,17],reserv:21,resolut:2,rest:25,restart:1,result:8,root:24,rout:[6,24,26],router:1,router_discoveri:1,rstp_enabl:19,rstpswitch:19,rtype:16,rule:[5,10],run:[1,2,4,5,9,10,11,14,24,25],run_ftp:25,run_network:[5,6,9,10,11,12,13,25],run_scenario:14,same:25,save:25,save_docu:25,scan:[13,14,24,25],scenario:[5,6,7,8,9,10,11,12,13,14,24],script:23,sdn:24,search:24,secur:[22,24],see:[14,18,21,23],seed:[5,6,7,9,10,11,14,20,25],select:14,self:22,send:5,sent:10,server:[2,7,10,22,24,25],servic:[6,8,24],set:[1,10,13,15,21],setup:24,sever:[9,14],sheet:[24,25],should:[2,5,6,7,8,9,10,12,13,22,25],should_discov:1,shown:25,simpli:24,sinc:21,singl:[1,14],size:14,slim:0,snif:[5,6,7,24,25],softwar:24,some:[5,10,24],sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25],span:[24,26],specifi:1,sphinx:24,ssh:24,stackoverflow:1,start:[2,12,13,21,25],starvat:[24,25],static_arp:16,static_rout:1,statictaskdocu:25,statu:[14,19],still:19,store:[1,2,21],stp:19,stp_learn:19,str:[1,5,6,7,9,10,11,22,25],stretch:0,string:[1,2,17,25],student:[5,6,7,9,10,11,14,24,25],studentallowedansw:25,studentdirectori:25,subnet:[1,9,24,26],subnet_mask:1,subnet_t:17,success:16,suppli:[1,2,24],support:21,switch_count:[12,13],switch_graph:17,switch_kwarg:18,sys:14,system:14,tabl:6,tag:[21,24,25],tag_intf:21,take:[12,13,14,24],taken:9,task:[5,6,7,8,9,10,12,13,24,25],task_docu:25,tcpdump:10,teacher:[5,6,7,9,10,11,14,24,25],teacherdirectori:25,techniqu:24,tee:22,tell:2,temp:10,test:[9,14],test_scenario:14,text:17,than:1,thei:[9,13,14,25],them:[1,5,14,18,25],thi:[2,5,6,7,8,9,10,11,12,13,14,19,23,24,25],thier:9,through:24,time:[1,14,21,24],time_serv:1,todo:14,top:11,top_100_port:11,track:2,traffic:5,tree:[24,26],trunk:[21,24,25],trunk_intf:21,tunnel:21,tupl:[1,18,25],two:1,type:[1,9,14,21,22,25],uncaught:14,untag:21,unus:21,upon:14,url:17,use:[0,1,7,10,11,13,20,21],used:[2,9,13,14,22,23,24,25],user:[2,5,6,7,8,9,10,11,12,13,14,15,24,25],usernam:15,using:[0,24],usual:14,util:[15,16,17,18,19,20,21,24],utilitil:24,vagrant:[14,24],valu:14,variabl:1,vconfig:13,verbos:23,veri:[22,24],view:24,viewer:24,virtual:[24,26],virtualbox:24,vlan:[21,24,25],vlan_count:[12,13],vlan_mode_intf:21,vlandoubletag:12,vlanmod:21,vlanswitch:21,vlantrunk:[12,13],vnc:[2,24],volum:1,vsftpd:[4,5,10],vswitch:21,vswitchd:21,vulner:24,wait:19,wait_stp:19,web:[2,22,24],weight:[5,6,7,8,9,10,11,12,13,14,25],when:2,which:9,widthxheightxcolordepth:2,wireshark:10,within:[1,17,22,23,24],without:[14,24],word:2,work:6,would:14,wouldn:6,wrapper:22,write:1,writeansw:17,www:[1,21],yet:2,you:24},titles:["Base Continer","ISC DHCP Server","Kali Linux","Nginx Web Server","Very Secure FTP Daemon","ARP Poisoning","CAM Flooding","DHCP Scanning","DHCP Starvation","Host Scanning","Packet Sniffing","Port Scanning","VLAN Double Tagging","VLAN Trunking","Start Function","Host Account Management","Address Routing Protocol","Documenation","Mininet Network Generation","Spanning Tree Protocol","Subnet","Virtual LAN","Containers","Controller","DVNI","Scenarios","Utilities"],titleterms:{"function":14,account:15,address:16,arp:5,base:0,cam:6,code:24,contain:22,contin:0,control:23,daemon:4,develop:24,dhcp:[1,7,8],docker:22,documen:17,document:24,doubl:12,dvni:24,flood:6,ftp:4,gener:18,get:24,host:[9,15],indic:24,instal:24,isc:1,kali:2,lan:21,linux:2,manag:15,mininet:18,network:18,nginx:3,packet:10,poison:5,port:11,protocol:[16,19],requir:24,rout:16,scan:[7,9,11],scenario:25,secur:4,server:[1,3],snif:10,span:19,start:[14,24],starvat:8,subnet:20,tabl:24,tag:12,todo:[1,9,13],tree:19,trunk:13,usag:24,util:26,veri:4,virtual:21,vlan:[12,13],web:3}})