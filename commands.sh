cd themes/keywind
yarn build
cd ../..

docker build -t renanzan/custom-keycloak .
docker push renanzan/custom-keycloak
kubectl delete -f kubernetes-files/.
kubectl apply -f kubernetes-files/.
