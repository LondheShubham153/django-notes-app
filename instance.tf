resource "aws_key_pair" "ssh_key" {
  key_name   = "id_rsa"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_instance" "nginxproject23" {
  ami           = "ami-0287a05f0ef0e9d9a"
  instance_type = "t2.micro"
  key_name      = aws_key_pair.ssh_key.key_name


  provisioner "file" {
    source      = "userdata.sh"
    destination = "/home/ubuntu/userdata.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "chmod +x /home/ubuntu/userdata.sh",
      "sudo /home/ubuntu/userdata.sh"
    ]
  }

  connection {
    user        = var.INSTANCE_USERNAME
    host        = self.public_ip
    type        = "ssh"
    private_key = file("${var.PATH_TO_PRIVATE_KEY}")
  }

}
