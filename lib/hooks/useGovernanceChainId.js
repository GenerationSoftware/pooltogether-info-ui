import { APP_ENVIRONMENT, useAppEnv } from '@pooltogether/hooks'
import { NETWORK } from '@pooltogether/utilities'

export const useGovernanceChainId = () => {
  const { appEnv } = useAppEnv()
  return appEnv === APP_ENVIRONMENT.mainnets ? NETWORK.mainnet : NETWORK.rinkeby
}
