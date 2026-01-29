import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'opqdkc9i',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,

  // Create a random studio hostname on every deploy
  studioHost: `migration-${Math.random().toString(36).substring(2, 15)}`,
})

