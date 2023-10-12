import serverNado from './initial'

export function getCategories() {
  return serverNado({
    url: '/categories',
    method: 'get'
  })
}

export function postCategories(data) {
  return serverNado({
    url: '/categories/',
    method: 'post',
    data
  })
}

export function putCategories(data) {
  return serverNado({
    url: `/categories/${data._id}`,
    method: 'put',
    data
  })
}
export function deleteCategories(data) {
  return serverNado({
    url: `/categories/${data._id}`,
    method: 'delete'
  })
}
