export const scrollIntoView = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}
