# CI/CD Pipeline Setup Guide

This guide explains how to set up the automated deployment pipeline for rougemakeovers.com.

## Overview

The pipeline automatically:
1. Triggers on push to `main` or `master` branch
2. Builds the Vite/React project
3. Deploys the `dist` folder to your server at `/www/wwwroot/rougemakeovers.com/dist`

## Required GitHub Secrets

You need to add the following secrets to your GitHub repository:

### How to Add Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each of the following secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `SERVER_HOST` | Your server's IP address or hostname | `192.168.1.100` or `server.example.com` |
| `SERVER_USERNAME` | SSH username for the server | `root` or `www` |
| `SERVER_SSH_KEY` | Private SSH key for authentication | (see below) |
| `SERVER_PORT` | SSH port (usually 22) | `22` |

### Generating SSH Key (if you don't have one)

On your **local machine**, run:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy_key
```

This creates two files:
- `~/.ssh/github_deploy_key` (private key) → Add this to `SERVER_SSH_KEY` secret
- `~/.ssh/github_deploy_key.pub` (public key) → Add this to your server

### Adding Public Key to Server

SSH into your server and run:

```bash
# Create .ssh directory if it doesn't exist
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Add the public key
echo "YOUR_PUBLIC_KEY_CONTENT" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Or if you have access to your server panel (like BT Panel, cPanel, etc.), add the public key through the SSH Keys management interface.

## Server Directory Structure

After deployment, your server will have:

```
/www/wwwroot/rougemakeovers.com/
└── dist/
    ├── index.html
    ├── assets/
    │   ├── *.js
    │   ├── *.css
    │   └── ...
    └── ...
```

## Manual Trigger

You can also trigger the deployment manually:

1. Go to **Actions** tab in your GitHub repository
2. Select **Build and Deploy to Server** workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

## Troubleshooting

### Deployment Failed - SSH Connection

- Verify `SERVER_HOST` is correct
- Verify `SERVER_PORT` is correct (default: 22)
- Ensure the SSH key is properly formatted (include the full key with headers)
- Check if your server's firewall allows SSH connections from GitHub Actions IPs

### Deployment Failed - Permission Denied

- Ensure the SSH user has write permissions to `/www/wwwroot/rougemakeovers.com/dist`
- Check if the public key is properly added to `~/.ssh/authorized_keys`

### Build Failed

- Check if all dependencies are properly listed in `package.json`
- Ensure there are no TypeScript or ESLint errors

## Security Notes

- Never commit SSH keys to the repository
- Use GitHub Secrets for all sensitive information
- Consider using a dedicated deployment user with limited permissions
- Regularly rotate SSH keys

## Alternative: Using Password Authentication

If you prefer password authentication (less secure), modify the workflow:

```yaml
- name: Deploy to Server via SSH
  uses: appleboy/scp-action@v0.1.7
  with:
    host: ${{ secrets.SERVER_HOST }}
    username: ${{ secrets.SERVER_USERNAME }}
    password: ${{ secrets.SERVER_PASSWORD }}  # Use password instead of key
    port: ${{ secrets.SERVER_PORT }}
    source: "dist/*"
    target: "/www/wwwroot/rougemakeovers.com"
    strip_components: 1
    overwrite: true
    rm: true
```

Add `SERVER_PASSWORD` to your GitHub secrets instead of `SERVER_SSH_KEY`.


