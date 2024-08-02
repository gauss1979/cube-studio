PckageName=front_$1.tar.gz
echo "p1/4 zip file $PckageName"
cd myapp/static/appbuilder/
tar -czf $PckageName ./frontend
echo "p2/4 upload file "
scp -v ./$PckageName root@116.205.239.177:/home/docker/cube/frontend/
echo "p3/4 unzip "
ssh -t root@116.205.239.177 "cd /home/docker/cube/frontend/ && rm -fr frontend/ && tar -xzf $PckageName "
echo "p4/4 unzip "
ssh -t root@116.205.239.177 "cd /home/docker/cube/frontend/ && docker build -t lingxi-cube-frontend:latest . "
echo "done"



