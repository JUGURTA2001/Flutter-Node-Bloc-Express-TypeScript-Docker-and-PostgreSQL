import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class SignupPage extends StatefulWidget {
  const SignupPage({super.key});

  @override
  State<SignupPage> createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final nameController = TextEditingController();
  final formKey=GlobalKey<FormState>();

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    nameController.dispose();
    formKey.currentState!.validate();
    super.dispose();
  }



  

  @override
  Widget build(BuildContext context) {
    return Scaffold(                          // ⬅️ plus de const
      body: Padding(
        padding: const EdgeInsets.all(15.0),  // ⬅️ const ici est OK
        child: Form(
          key: formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                "Sign Up.",
                style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 30),
                  TextFormField(
                controller: nameController,
                 decoration : const  InputDecoration(
                  hintText: 'Name',
              ),
              validator: (value) {
                if (value == null || value.trim().isEmpty) {
                  return "Name field cannot be empty!";
                }
                return null;
              },

              ),
                const SizedBox(height: 15),
              TextFormField(
                controller: emailController,
                decoration : const  InputDecoration(
                  hintText: 'Email',
              ),
               validator: (value) {
                if (value == null || value.trim().isEmpty  || value.trim().contains("@")) {
                  return "Email field is invalid!";
                }
                return null;
              },
              ),
              const SizedBox(height: 15),
              TextFormField(
                controller: passwordController,
                 decoration : const  InputDecoration(
                  hintText: 'Password ',
              ),
               validator: (value) {
                if (value == null || value.trim().isEmpty  || value.trim().length < 6) {
                  return "Password field is invalid!";
                }
                return null;
              },
              ),
              const SizedBox(height: 15),
              ElevatedButton(
            onPressed: () {},
            child: const Text(
              'SING UP',
              style: TextStyle(fontSize: 16, color: Colors.white),
            ),
          ), 
             RichText(
            text: TextSpan(
              text: 'Already have an account? ',
              style: Theme.of(context).textTheme.titleMedium,
              children: [
                TextSpan(
          text: 'Sign IN', 
          style:TextStyle(fontWeight: FontWeight.bold,),
                 
                ),
              ],
            ),
          ),
            ],
          ),
        ),
      ),
    );
  }
}