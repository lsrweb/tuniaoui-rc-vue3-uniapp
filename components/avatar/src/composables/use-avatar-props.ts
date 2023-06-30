import { computed, inject } from 'vue'
import { avatarGroupContextKey } from '../../../../tokens'

import type { AvatarProps } from '../avatar'

export const useAvatarProps = (props: AvatarProps) => {
  const avatarGroup = inject(avatarGroupContextKey, undefined)

  // 头像颜色类型
  const type = computed<string>(() => {
    return props?.type ?? avatarGroup?.type ?? ''
  })

  // 头像尺寸
  const size = computed<string | number>(() => {
    return props?.size ?? avatarGroup?.size ?? ''
  })

  // 头像形状
  const shape = computed<string>(() => {
    return props?.shape ?? avatarGroup?.shape ?? 'circle'
  })

  // 头像图片模式
  const imgMode = computed<string>(() => {
    return props?.imgMode ?? avatarGroup?.imgMode ?? 'aspectFill'
  })

  // 背景颜色
  const bgColor = computed<string>(() => {
    return props?.bgColor ?? avatarGroup?.bgColor ?? 'tn-gray-light'
  })

  // 显示边框
  const border = computed<boolean>(() => {
    return props?.border ?? avatarGroup?.border ?? false
  })

  // 边框颜色
  const borderColor = computed<string>(() => {
    return props?.borderColor ?? avatarGroup?.borderColor ?? ''
  })

  // 是否加粗边框
  const borderBold = computed<boolean>(() => {
    return props?.borderBold ?? avatarGroup?.borderBold ?? false
  })

  // 显示阴影
  const shadow = computed<boolean>(() => {
    return props?.shadow ?? avatarGroup?.shadow ?? false
  })

  // 阴影颜色
  const shadowColor = computed<string>(() => {
    return props?.shadowColor ?? avatarGroup?.shadowColor ?? ''
  })

  // 头像间的间距
  const avatarGap = computed<number>(() => {
    let gap = Number(avatarGroup?.gap ?? 0)
    if (gap < 0) gap = 0
    if (gap > 1) gap = 1
    return gap
  })

  return {
    type,
    size,
    shape,
    imgMode,
    bgColor,
    border,
    borderColor,
    borderBold,
    shadow,
    shadowColor,
    avatarGap,
  }
}
