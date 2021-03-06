## GraphQL API Adobe Commerce ##
## How the requests are organized ##
***
Project dedicated to all graphQl queries and mutiations that are avaliable on Adobe commerce native (2.4), some of the requests have automated tests, see the all this file to find all the details.
***
If you just want to use the collection without any kind of automated tests, just import the collection.json file (GraphQL_Adobe_Commerce_collection.json) found on the path /collection and the enviromnent.json file (Native-environment.json) to your Postman. More info on how to import can be found in the [Postman official documentation](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/)
***

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
The requests that are not present on a default Magento 2 installations (PWAOnly, B2BOnly & AdobeCommerceOnly) *Have not been tested*, they where made by following the [official documentation](https://devdocs.magento.com/guides/v2.4/graphql/).

## Environment variables needed##

```
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
├───admin_token
│   └───Token for admin, needed for some requests
```

## Queries with Filters or Parameters ##

```
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
```


# Requests skipped for tests #
All of the contained on PWAOnly, B2BOnly & AdobeCommerceOnly, as well as the following:
```
-createCustomer
-revokeCustomerToken
-generateCustomerTokenAsAdminMutation
-removeItemFromCart
-mergeCartsMutation
-updateCartItemsMutation
-reorderItemsMutation
-sendEmailToFriendMutation
-createBraintreeClientTokenMutation
-createKlarnaPaymentsSessionMutation
-createPayflowProTokenMutation
-createPaypalExpressTokenMutation
-deletePaymentTokenMutation
-setGuestEmailOnCartMutation
-applyCouponToCartMutation
-dynamicBlocksQuery
```

# Tests used on Requests (With the exeptions above) #
```
	let unwantedList = [
		"errors", "errorMessage", "alert", "Load error", "Null file name", "error code", "Service Unavailable", "Cannot query field", "Errors:", "Syntax Error"
	]
	pm.test("Check for unwanted content in requests", () => {
		unwantedList.map(item => pm.expect(pm.response.text()).not.to.include(item));
	});
```

# Requests with Schema tests #
```
-createCustomerMutation
-createCustomerV2Mutation
-generateCustomerTokenMutation
-changeCustomerPasswordMutation
-customerQuery
-productsQuery
-createEmptyCartMutation
-addSimpleProductsToCartMutation
-customerCartQuery
```


## Newman Automated tests structure & how to  ##

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
***
Run the command ./scripts/install-newman.sh (Note that, following this command the installation will use SUDO, if you don't wish to use SUDO on the installations, please do them manually)
To run only the tests you need to run the comand: "npm run native_apis environment/Native-environment.json 2>/dev/null" (note that if you changed the environment name you should do as well on this command)
***
We have as well the option of runing this tests via docker & saving the reports on AWS s3 buckets, to do so its needed to follow the steps:
-To use the AWS control by CLI its needed the keys from the account, so we need to save them as environment variable, with the same names as the ones on the script ./Scripts/dockerScript.sh
-Once the keys are correct, its needed to run the script ./Scripts/dockerScript.sh, this will create an image, install the dependancies, run the tests and upload the results to two buckets on AWS S3, one with all the past tests, and one with only the most recent one 
***



## Requests with failed responses ##
    assignCustomerToGuestCartMutation
    removeItemFromCart
    mergeCartsMutation
    dynamicBlocksQuery



## PENDING CHANGES  ##
    Make updateCartItemsMutation Get on prerequtest a itemId
    Create Payment token, and safe response on payment_token_hash
    Create and fill admintoken 
    Correct the request *mergeCartsMutation*
    Correct the request *sendEmailToFriendMutation*
    Complete the pending automated tests