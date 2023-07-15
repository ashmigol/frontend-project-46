install: install-deps


install-deps:
	
	npm ci

lint:
		npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

	
publish:
	npm publish --dry-run
