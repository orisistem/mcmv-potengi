# ==========================================
# Terraform Main Configuration Template
# ==========================================
# This is a basic template to provision an AWS EC2 instance.
# You must configure your AWS credentials before running `terraform apply`.

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  # Recommended: Store your state file remotely (e.g., S3) for team collaboration
  # backend "s3" {
  #   bucket = "my-terraform-state-bucket"
  #   key    = "production/terraform.tfstate"
  #   region = "us-east-1"
  # }
}

provider "aws" {
  region = var.aws_region
}

# Example: Creating a basic Security Group for SSH and HTTP
resource "aws_security_group" "web_sg" {
  name        = "${var.project_name}-web-sg"
  description = "Allow HTTP and SSH traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # WARNING: In production, restrict this to your IP
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Example: Creating an EC2 Instance
resource "aws_instance" "web_server" {
  ami           = "ami-0c7217cdde317cfec" # Ubuntu 22.04 LTS (us-east-1) - Update as needed
  instance_type = var.instance_type
  
  vpc_security_group_ids = [aws_security_group.web_sg.id]

  tags = {
    Name        = "${var.project_name}-server"
    Environment = var.environment
  }
}
