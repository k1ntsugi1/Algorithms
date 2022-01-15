install: 
	npm ci
eslintCheck:
	npx eslint .
publish:
	npm publish --dry-run
