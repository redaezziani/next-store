import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skPmikhFO7bsE81RtR4XyQiAbt65dPOvDl2n4Phgd4nEOogXV2V90DcejSxT5jmbi4ZeHOsl7U2qWqIGGY7gZceDok3A5d0rltypGXtCWmvSARfXyK2gnUxYjiv7kDedRjweQHJ2mid75z92K10d5gfqLhCzzlglvls8OiiFADhtON3m9ljZ"
})
