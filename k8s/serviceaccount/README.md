## Create Admin service account

ejecutar lo siguiente

```
kubectl apply -f admin-sa.yml
kubectl apply -f admin-rbac.yml

#obtener el token admin
SA_NAME="jmutai-admin"

kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep ${SA_NAME} | awk '{print $1}')

```
