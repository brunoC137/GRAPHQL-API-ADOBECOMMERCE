## GraphQL API Adobe Commerce ##
Project dedicated to all graphQl queries and mutiations that are avaliable on Adobe commerce native, some of the requests have automated tests, see the all this file to find those who are.

## How the requests are organized ##
***
```
GraphQL - Adobe Commerce
├───General
│   ├───GeneralMutations
│   ├───GeneralQueries
├───Categories
│   ├───CategoriesQueries
├───Stores
│   ├───StoreQueries
├───Customer
│   ├───CustomerMutations
│   ├───CustomerQueries
├───Catalog
│   ├───CatalogQueries
├───Cart
│   ├───CartMutations
│   ├───CartQueries
├───Checkout
│   ├───CheckoutMutations
├───PWAOnly
│   ├───PWAOnlyMutations
│   ├───PWAOnlyQueries
├───B2BOnly
│   ├───B2BOnlyMutations
│   ├───B2BOnlyQueries
├───AdobeCommerceOnly
│   ├───AdobeCommerceOnlyMutations
│   │   │   └───WishListMutations
│   ├───AdobeCommerceOnlyQueries
│   │   │   └───WishListQueries
```
***

## DISCLAIMER ##
The requests that are not present on a default Magento 2 installations (PWAOnly, B2BOnly & AdobeCommerceOnly) *Have not been tested*, they where only made by following the official documentation, so there can be errors within this requests.

## Environment needed for  automated variables ##
├───API Url
│   └───URL used for the requests
├───usermail
│   └───Sample email for the user
├───userpass
│   └───Sample password for the user
├───simple_sku_sample
│   └───SKU sample from a simple product
├───configurable_parent_sku
│   └───SKU sample from a configurable parent product
├───configurable_sku
│   └───SKU sample from a configurable product

## Queries with Filters or Parameters ##
├───GeneralQueries
│   └───cmsBlocksQuery
│   └───cmsPageQuery
│   └───compareListQuery
│   └───customAttributeMetadataQuery
│   └───isEmailAvailableQuery
│   └───pickupLocationsQuery
│   └───urlResolverQuery
├───CategoriesQueries
│   └───CategoriesQuery
│   └───CategoryListQuery
├───CatalogQueries
│   └───productsQuery
├───B2BOnlyQueries
│   └───isCompanyAdminEmailAvailableQuery
│   └───isCompanyRoleNameAvailableQuery
│   └───isCompanyUserEmailAvailableQuery
│   └───negotiableSingleQuoteQuery
│   └───negotiableLoggedQuoteQuery
├───AdobeCommerceOnly
│   └───giftCardAccountQuery
│   └───giftRegistryQuery
│   └───giftRegistryEmailSearchQuery
│   └───giftRegistryIdSearchQuery
│   └───giftRegistryTypesQuery

# Requests skipped for tests#
 All of the contained on PWAOnly, B2BOnly & AdobeCommerceOnly, as well as the following:

## Newman Automated tests stucture & how to  ##
***
```
GRAPHQL-API-ADOBECOMMERCE/
├───aws
├───collections
├───environment
├───newman
├───nodemodules
├───s3_scripts
├───scripts
```
Run the command ./scripts/install-newman.sh (Note that, following this command the installation will use SUDO, if you don't wish to use SUDO on the intalations, please do them manually)
To run only the tests you need to run the comand: "npm run native_apis environment/Native-environment.json 2>/dev/null || true" (note that if you changed the encironment or the collection name, you should do as well on this command)

We have as well the option of runing this tests via dockers & saving the reports on AWS s3 buckets, to do so its needed to follow the steps:
-To use the AWS control by CLI its needed the keys from the account, so we need to save them as environment variable, with the same names as the ones on the script ./Scripts/dockerScript.sh
-Once the keys are correct, its only needed to run the script ./Scripts/dockerScript.sh, this will create an image, install the dependancies, run the tests and upload the results to two buckets on AWS S3, one with all the past tests, and one with only the most recent one 




## Requests with failed responses even following the documentation ##
    assignCustomerToGuestCartMutation(
        https://devdocs.magento.com/guides/v2.4/graphql/mutations/assign-customer-to-guest-cart.html
    )
    createPayflowProTokenMutation(
        https://devdocs.magento.com/guides/v2.4/graphql/mutations/create-payflow-pro-token.html
    )




## PENDING CHANGES  ##
    Create Payment token, and safe response on payment_token_hash
    Create and fill admintoken 
    Correct the request *mergeCartsMutation*
    Correct the request *sendEmailToFriendMutation*
    Complete the pending automated tests