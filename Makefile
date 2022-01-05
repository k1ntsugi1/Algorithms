install: 
	npm ci
eslint-check:
	npx eslint .
publish:
	npm publish --dry-run
