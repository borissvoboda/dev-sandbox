terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 3.5.0"
        }
    }
}

provider "aws" {
    region =  "eu-central-2"
}

resource "aws_budgets_budget" "my_budgets_budget" {
  name = "my_budgets_monthly"
  budget_type = "COST"
  limit_amount = "100.0"
  limit_unit = "USD"
  time_unit = "MONTHLY"
  time_period_start = "2024-07-25_00:01"
}