setlocal
@echo off

@rem ApiKey��o�^
..\..\..\nuget.exe SetApiKey [ApiKey]

@rem symbolsource.org��SymbolPackage��o�^
..\..\..\nuget.exe push OssCons.DotNetSubcommittee.TestClassLibrary*.symbols.nupkg -source https://nuget.smbsrc.net/

pause