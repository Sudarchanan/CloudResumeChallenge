# Azure Provider source and version being used
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  features {}
}

# Create a resource group
resource "azurerm_resource_group" "crc_rg" {
  name     = "crc-rg"
  location = "South India"
}

#storage account

resource "azurerm_storage_account" "crcstorage123" {
  name                     = "cresumecstorage123"
  resource_group_name      = azurerm_resource_group.crc_rg.name
  location                 = azurerm_resource_group.crc_rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

#function app

resource "azurerm_function_app" "counterfunc" {
  name                       = "counttrigger"
  resource_group_name        = azurerm_resource_group.crc_rg.name
  location                   = azurerm_resource_group.crc_rg.location
  app_service_plan_id        = ""
  storage_account_name       = azurerm_storage_account.crcstorage123.name
  storage_account_access_key = azurerm_storage_account.crcstorage123.primary_access_key
}