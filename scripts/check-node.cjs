const [major, minor, patch] = process.versions.node.split('.').map(Number);

if (major !== 22 || minor < 23 || (minor === 23 && patch < 4)) {
  console.error('Use Node 22.23.4 or a later 22.x release. On Render, update or remove any NODE_VERSION override.');
  process.exit(1);
}
