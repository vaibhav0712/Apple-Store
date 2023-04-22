import category from './category'
import products from './products'
import {user, account} from 'next-auth-sanity/schemas'
export const schemaTypes = [category, products, user, account]

// export default defineConfig({
//   schema: {
//     name: 'default',
//     types: schemaTypes,
//   },
// })
