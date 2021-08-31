# TODO

Note: The API URL is `api.github.com/orgs/microsoft/repos`.

1. Fork this repo to your own Github account. Clone it locally.
2. Build and run the app locally. 
  - Fix any errors until it runs succesfully. 
  - When the app runs successfully, you should see a list of repo summaries.
3. Add a Github secret for `API_URL`. Set it to the URL above.
4. Create a Github Action called `CI`. The Action must:
  - execute on every new pull request
  - use Node 12
  - build the app
  - test the app
5. Test the `CI` action by creating a test pull request.
6. Create a Github Action called `Runner`. The Action must:
  - Execute on every push to the `main` branch.
  - Build a Docker image using the included Dockerfile.
  - Run the app in a container, using the `API_URL` secret.
7. Test the `Runner` Action by pushing to `main`. 
  - Run the Action until the Action logs show the output from the app (i.e. a list of repo summaries). 
8. (Bonus) Disable pull request merges unless the `CI` Action succeeds without errors. 
