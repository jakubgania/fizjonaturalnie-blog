npm run generate

cd dist

echo "fizjonaturalnie.pl" > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:jakubgania/fizjonaturalnie-blog.git master:gh-pages

cd ..