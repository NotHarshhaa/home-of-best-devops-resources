/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "github.com",
      "raw.githubusercontent.com",
      "www.docker.com",
      "www.datocms-assets.com",
      "www.ansible.com",
      "www.jenkins.io",
      "github.githubassets.com",
      "prometheus.io",
      "grafana.com",
      "helm.sh",
      "argo-cd.readthedocs.io",
      "istio.io",
      "www.elastic.co",
      "www.hashicorp.com",
      "about.gitlab.com",
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
